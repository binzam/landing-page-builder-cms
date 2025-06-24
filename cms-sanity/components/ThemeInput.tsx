'use client'
import {useEffect} from 'react'
import {set, PatchEvent} from 'sanity'
import {useClient} from 'sanity'

export default function ThemeInput(props: any) {
  const {onChange, value = {}} = props
  const client = useClient({apiVersion: '2025-06-24'})
  const primaryColor = value.primaryColor.value
console.log(value)
  useEffect(() => {
    async function fetchAndSetPalette() {
      if (!primaryColor) return
      const palette = await client.fetch(`*[_type == "colorPalette" && primary == $primary][0]`, {
        primary: primaryColor,
      })
    //   console.log(palette)
      if (palette && palette._id && value.colorPalette?._ref !== palette._id) {
        onChange(PatchEvent.from([set({_ref: palette._id, _type: 'reference'}, ['colorPalette'])]))
      }
    }
    fetchAndSetPalette()
  }, [client, onChange, primaryColor, value.colorPalette?._ref])

  return props.renderDefault(props)
}
