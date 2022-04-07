import re
export async function test() {
    try {
        const response = await fetch(`http://intern-2022.arpify.com/init`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "firstName":"Arusyak",
                "lastname":"Aghajanyan",
                "birthDay": "10/10/1985",
                "gender":"female",
            }),
        })
        return await response.json();
    } catch (error) {
        console.log("wrong", error);
    }
}