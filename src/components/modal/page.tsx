import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useMenuContext } from '../../context/menuContext/page';


// Define the props interface
interface DetailsProps {
    item: {
        data: Array<{ name: string; price: string; image: { src: string; alt: string } }>;
    };
}

const Details: React.FC<DetailsProps> = ({ item }) => {
    return (
        <section>
            {item.data.map((item) => (
                <Card key={item.name}>
                    <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img src={item.image.src} alt={item.image.alt} />
                        <p>Details about {item.name}</p>
                    </CardContent>
                    <CardFooter>
                        <p>Additional information can go here.</p>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}

export default Details;