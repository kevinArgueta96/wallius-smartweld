import { NextResponse } from 'next/server';

export async function GET() {

    
    const postToFacebook = async (pageId, accessToken) => {
        const response = await fetch(`https://graph.facebook.com/v21.0/me/accounts`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          });

        console.log(response);
      
        const data = await response.json();
        if (response.ok) {
          console.log('Publicación exitosa:', data);
        } else {
          console.error('Error al publicar:', data);
        }
      };
      const pageId = '482368098294365_122098331522648342';
      const accessToken = 'EAANDlqwxGuMBO7tOTGmSwowPKbzgMNRn3CBnhnZCng0gXagWAxGmFRPxuCZCdNG13auJhmwKGpFpuXIv1u7dRVEANymiW4jE16l0sdujLYuooWTg214s0I2IlWkDJYN65GtCinrUqRCYkXwtoipuhs3cqUcZAcTTZBVnRD8obOlrKfpH0vRODZB7H8bsPCkZCCmr5rWXuxk3AsslJFK0gyKT04lk4Abm4QSNZBZAiNCT'
      const obtainData = await postToFacebook(pageId, accessToken);
      console.log(obtainData);


  return NextResponse.json({ message: 'Hola desde la API de Next.js (App Router)' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: `Recibido: ${body.content}` });
}