import React from 'react'
import TableCell from '@mui/material/TableCell'

const CountryName = ({ name }) => {
  return <TableCell>{name.common}</TableCell>
}

export default CountryName
