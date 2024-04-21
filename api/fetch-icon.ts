import { VercelRequest, VercelResponse } from '@vercel/node';

const fetchIcon = async (req: VercelRequest, res: VercelResponse) => {
    const { url } = req.query;
    try {
        // Extract the image in the HTML in the div with the class 'Mqg6jb Mhrnjf'
        const response = await fetch(url as string);
        const html = await response.text();
        console.log(html);
        const match = RegExp(/<div class="Mqg6jb Mhrnjf"><img src="(.+?)"/).exec(html);
        if (match) {
            res.status(200).json({ icon: match[1] });
        } else {
            res.status(404).send('Icon not found');
        }
    } catch (error) {
        res.status(500).send('Failed to fetch HTML');
    }
};

export default fetchIcon;
