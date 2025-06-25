'use client'
import {useEffect, useState} from 'react'
import {set, PatchEvent} from 'sanity'
import {useClient} from 'sanity'

export default function ThemeInput(props: any) {
  const {onChange, value = {}} = props
  const client = useClient({apiVersion: '2025-06-24'})
  const primaryColor = value.primaryColor.value
  const [paletteData, setPaletteData] = useState<any>(null)
  // console.log(value)
  useEffect(() => {
    async function fetchAndSetPalette() {
      if (!primaryColor) return
      const palette = await client.fetch(`*[_type == "colorPalette" && primary == $primary][0]`, {
        primary: primaryColor,
      })
      // console.log(palette)
      if (palette && palette._id) {
        setPaletteData(palette)
        if (value.colorPalette?._ref !== palette._id) {
          onChange(
            PatchEvent.from([set({_ref: palette._id, _type: 'reference'}, ['colorPalette'])]),
          )
        }
      }
    }
    fetchAndSetPalette()
  }, [client, onChange, primaryColor, value.colorPalette?._ref])
  const colors = paletteData?.palette || {}
  return (
    <div>
      {props.renderDefault(props)}
      {paletteData && (
        <div style={{marginTop: '1rem'}}>
          <h4 style={{marginBottom: '0.5rem'}}>Preview Palette</h4>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
            {Object.entries(colors).map(([key, color]) => {
              const colorCode = color as string
              return (
                <div key={key} style={{textAlign: 'center'}}>
                  <div
                    title={key}
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: colorCode,
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                    }}
                  />
                  <div style={{fontSize: '10px', marginTop: '2px'}}>{key}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
