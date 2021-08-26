import * as React from 'react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flex?: number | string
  column?: boolean
  reverse?: boolean
  row?: boolean
  wrap?: boolean
  center?: boolean
}

interface FilteredProps {
  children?: any
}

export const Div = (props: Props) => {
  const styles: React.CSSProperties = { ...props.style }

  if (props.flex) styles.flex = props.flex
  if (props.wrap) styles.flexWrap = 'wrap'
  if (props.row || props.column) {
    styles.display = 'flex'
    styles.flexDirection = props.row
      ? (props.reverse ? 'row-reverse' : 'row')
      : (props.reverse ? 'column-reverse' : 'column')
  }

  if (props.center) {
    styles.alignItems = 'center'
    styles.justifyContent = 'center'
  }

  const disallowed = ['flex', 'wrap', 'row', 'column', 'center']

  const filteredProps: FilteredProps = Object.keys(props)
    .filter((key) => !disallowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = props[key]
      return obj
    }, {})

  return (
    <div {...filteredProps} style={styles}>
      {filteredProps.children}
    </div>
  )
}

export default Div
