function test_wait_api(t){
    setTimeout(() => {return "Api return value" + t.toString()} ,t)
    
}

function get_api(){
    // let k = await fetch('http://127.0.0.1:4000/')
    // let data = await k.json()

    // console.log(data,"this is data")

    let k = fetch('http://127.0.0.1:4000/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    console.log(k,"this is fetched data")

}

get_api()


async function exec(){
    await test_wait_api(5000)
    console.log("This is second console")
    await test_wait_api(3000)
}

// exec()

// let k = test_wait_api(5000)
// let l = test_wait_api(3000)
// console.log(k)
// console.log("This is second console")
// console.log(l)