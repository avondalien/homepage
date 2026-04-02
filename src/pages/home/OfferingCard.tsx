import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import type { PropsWithChildren } from "react"

interface OfferingCardProps extends PropsWithChildren{
    title: string
    description: string
    linkText?: string
    linkTarget?: string
}

const OfferingCard = (props: OfferingCardProps) => {
    const {
        title,
        description,
        linkText,
        linkTarget
    } = {...props}

    return(
        <Card sx={{
            width: {xs: '100%', md: 'calc(50% - 16px)'},
            display: 'flex',
            flexDirection: 'column',
        }}>
            <CardContent>
                <Stack direction="column" spacing={1}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body1">{description}</Typography>
                    {linkText &&
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
