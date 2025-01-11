import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'
export function HeaderMain(){
    return (
        <>
            <AppBar position="fixed" color="secondary">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu />
                </IconButton>
                <Typography variant="h6">
                
                </Typography>
            </Toolbar>
            </AppBar>
        </>
    )
}