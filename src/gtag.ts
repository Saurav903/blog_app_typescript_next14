// type Props = string | undefined

// interface Props{
//   value:string | undefined
// }


export const GA_TRACKING_ID : any = process.env.NEXT_PUBLIC_GOOGLE_ID

export const pageview = (url: any) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value } : any) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}