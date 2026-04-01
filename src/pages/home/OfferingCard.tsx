import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import type { SvgIconComponent } from "@mui/icons-material"
import type { PropsWithChildren } from "react"

interface OfferingCardProps extends PropsWithChildren{
    title: string
    description: string
    icon: SvgIconComponent
    linkText?: string
    linkTarget?: string
}

const OfferingCard = (props: OfferingCardProps) => {
    const {
        title,
        description,
        icon: Icon,
        linkText,
        linkTarget
    } = {...props}

    return(
        <Card sx={{
            width: {xs: '100%', md: 'calc(50% - 16px)'},
            display: 'flex',
            flexDirection: 'column',
        }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Stack direction="column" spacing={2} sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{
                            width: 56,
                            height: 56,
                            flexShrink: 0,
                            borderRadius: '50%',
                            backgroundColor: '#2e6b54',
                            border: '3px solid black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Icon sx={{ fontSize: 32, color: 'white' }} />
                        </Box>
                        <Typography variant="h5">{title}</Typography>
                    </Stack>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                    {
                        linkText &&
                        <Typography variant="body1">
                            <a href={linkTarget}>{linkText}</a>
                        </Typography>
                    }
                </Stack>
            </CardContent>
        </Card>
    )
}

export { OfferingCard }