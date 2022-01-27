import * as React from 'react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flex?: number | string
  column?: boolean
  reverse?: boolean
  row?: boolean
  wrap?: boolean
  center?: boolean
  children?: React.ReactNode
}

export const Div = ({
  flex,
  column,
  reverse,
  row,
  wrap,
  center,
  children,
  style,
  ...rest
}: Props) => {
  const styles: React.CSSProperties = { ...style }

  if (flex) styles.flex = flex
  if (wrap) styles.flexWrap = 'wrap'
  if (row || column) {
    styles.display = 'flex'
    styles.flexDirection = row
      ? (reverse ? 'row-reverse' : 'row')
      : (reverse ? 'column-reverse' : 'column')
  }

  if (center) {
    styles.alignItems = 'center'
    styles.justifyContent = 'center'
  }

  return (
    <div {...rest} style={styles}>
      {children}
    </div>
  )
}

export default Div
