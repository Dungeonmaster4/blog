import { styled } from "@mui/material"
import { Link } from "react-router-dom"

{/* <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab> */}

export const NavbarLink = styled(Link)(({theme})=>({
    textDecoration: 'none',
    color: theme.palette.common.white
}))

