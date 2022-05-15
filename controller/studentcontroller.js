class student_controller {

    // get session info
    static get_session_info = (req, res)=>{
        console.log(req.session)
        // session id
        console.log(`this is the session id ${req.session.id}`)
        console.log(req.session.cookie.maxAge) // we are not provided maxAge so it will return undefined or null
        console.log(req.session.cookie.originalAge) // we are not provided originalAge so it will return undefined or null
        console.log(req.session.cookie.sessionID) 
        res.send("session info")
    }

    // Regenerate Session
    static regenerate_session = async(req, res) =>{

        const session_id = await console.log(`this is old session id : ${req.session.id}`)

        req.session.regenerate(()=>{

            console.log("Session Regenrated")
            res.send({sessionID : `New session id is ${req.session.id}`})
            console.log(`this is new session id ${req.session.id}`)

        })
    }

    // Reload session
    static reload_session = (req, res)=>{

        req.session.reload(()=>{

            res.send({reloaded : `reload success id : ${req.session.id}`})

        })
    }

    // Delete session
    static delete_session = (req, res)=>{

        req.session.destroy(()=>{
        console.log("session ended")

        })

        res.send({status : `Session ended`})
    }

    // session example
    static session_example = (req, res)=>{

        // hit the url in web browser to increase the count value
        if(req.session.count){

            req.session.count++

        }else{
            req.session.count = 1
        }
        res.send(`count : ${req.session.count}`) // to get the session value we can use count property
    }
}

module.exports = student_controller;