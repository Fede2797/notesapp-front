import { Tooltip } from '@mui/material'
import React from 'react'

export const CustomTooltip = ({children, title}) => {
  return (
    <Tooltip title={title}
                PopperProps={{
                    modifiers: [
                        {
                            name: "offset",
                            options: {
                                offset: [0, -15],
                            },
                        },
                    ],
                }}
    >
    {children}
    </Tooltip>
  )
}
