"use client";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export function AboutUsSection() {
    return (
       
        <section id="about" className="py-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800">
            <h1 style={{ textAlign: 'center', padding: '20px', fontWeight: 'bold' }}>
                ABOUT US
            </h1>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '40px' , justifyContent: 'center', flexWrap: 'wrap' }}>
                <Card sx={{ maxWidth: 345, backgroundColor: '#b6bbc2' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="60"
                            image="/location.png"
                            alt="location"
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                We are located in Matsapha and Mbikwakhe. We offer reliable repair services for all your electronic devices.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 , backgroundColor: '#b6bbc2' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="60"
                            image="/repairs.png"
                            alt="repairs"
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                We specialize in repairing a wide range of household electronics including fridges, and TVs.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, backgroundColor: '#b6bbc2' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="60"
                            image="/enquire.png"
                            alt="enquiries"
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Enquire about our services or book a repair through WhatsApp or by calling us directly. See our contact details below.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </section>
      
    );
}
export default AboutUsSection;