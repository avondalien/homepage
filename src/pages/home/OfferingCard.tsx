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
    index: number
    linkText?: string
    linkTarget?: string
}

const OfferingCard = (props: OfferingCardProps) => {
    const {
        title,
        description,
        icon: Icon,
        index,
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
                <Stack direction={{ xs: index % 2 === 0 ? 'row' : 'row-reverse', md: 'row' }} spacing={2} sx={{ flexGrow: 1 }}>
                    <Box sx={{
                        width: '20%',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box sx={{
                            width: 64,
                            height: 64,
                            borderRadius: '50%',
                            backgroundColor: '#2e6b54',
                            border: '3px solid black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Icon sx={{ fontSize: 37, color: 'white' }} />
                        </Box>
                    </Box>
                    <Stack direction="column" spacing={1} sx={{ width: '80%' }}>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="body1">{description}</Typography>
                        {
                            linkText &&
                            <Typography variant="body1">
                                <a href={linkTarget}>{linkText}</a>
                            </Typography>
                        }
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export { OfferingCard }