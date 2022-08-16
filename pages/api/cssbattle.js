

export default async function handler(req, res) {
    try{
        const input = req.body

        const response = await fetch("https://cssbattle.dev/api/getScore?levelId=25&token=", {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(input),
        })


       const data = await response.json();
        res.send(data)
        console.log(data);

    }catch(error){
        res.status(400).json({error})
    }
  }
  
