import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import type { PropsWithChildren } from "react"

interface OfferingCardProps extends PropsWithChildren{
    title: string
    description: string
    image: string
    imageAltText: string
    linkText?: string
    linkTarget?: string
}

const OfferingCard = (props: OfferingCardProps) => {
    const {
        title,
        description,
        image,
        imageAltText,
        linkText, 
        linkTarget
    } = {...props}

    return(
        <Card sx={{
            margin: 1,
            width: {xs: '100%', md: '20%'}
        }}>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    <CardMedia
                        component="img"
                        height={100}
                        width={100}
                        image={image}
                        alt={imageAltText}
                        sx={{
                            objectFit: 'contain', 
                            display: {xs: 'none', sm: 'flex'}}}
                    />
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h5">
                            {title}
                        </Typography>
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
                </Stack>
            </CardContent>
        </Card>
    )
}

export { OfferingCard }