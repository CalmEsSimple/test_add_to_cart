import fetch from 'node-fetch';

const urls = [
    "https://calmessimple.com.ar/?add-to-cart=2249192&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2249011&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2228672&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2228673&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2228674&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2228675&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196415&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196416&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196417&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196418&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196431&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196432&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196433&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196434&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196420&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196422&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196421&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2196423&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067782&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067783&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067784&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067785&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067786&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067787&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067788&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067789&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067790&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067791&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067792&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2067793&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1993790&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1993793&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1993791&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1993792&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1993794&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1993795&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851820&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851821&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851822&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851823&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851824&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851825&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835515&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835517&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835544&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835545&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835546&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851776&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851777&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851778&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851779&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1831967&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1831968&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1855363&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1855364&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851246&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851247&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851248&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851249&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851250&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851251&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851252&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851253&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851254&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851255&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851256&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851257&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851431&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851432&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851433&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851434&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851435&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851436&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851437&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851438&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851439&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851440&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851441&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851442&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851443&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851444&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851445&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1851446&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835989&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835990&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835991&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835992&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2076372&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2076373&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2076375&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=2076376&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835993&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835994&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835995&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835996&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835997&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835998&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1835999&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=1836000&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=896871&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=896872&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=772404&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=896873&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=896874&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=896875&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=724728&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=724729&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=507242&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=507243&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=172659&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=172660&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=342&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=343&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=172661&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=172662&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=335&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=336&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=11042&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=699&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=11190&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=11191&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=525870&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=525871&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=525872&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=525873&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=525874&quantity=1",
    "https://calmessimple.com.ar/?add-to-cart=525878&quantity=1",
];

const get_cart_fetch = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'text/html',
                'User-Agent': 'Mozilla/5.0'
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const headers = response.headers.raw();
        // const html = await response.text();

        console.log(`URL: ${url}`);
        // console.log(`Headers: ${(headers)}`);
        // console.log(`HTML Response: ${html.slice(0, 200)}...`);
    } catch (error) {
        console.error(`Error al procesar la URL ${url}:`, error);
    }
};

const fetchAllUrls = async () => {
    for (const url of urls) {
        await get_cart_fetch(url);
    }
};

fetchAllUrls();