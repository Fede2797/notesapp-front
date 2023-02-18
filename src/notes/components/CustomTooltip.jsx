import { createTheme, Tooltip, tooltipClasses } from '@mui/material';
import React from 'react'

export const CustomTooltip = ({children, title}) => {

  return (
    <Tooltip title={title}>
      {children}
    </Tooltip>
  )
}
