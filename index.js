const express =require('express')
const bodyParser =require('body-parser')
const nodemailer =require('nodemailer')
const app =express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/api/form',(req,res)=>{
  
    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail =`
        <h2>Leave Application</h1>
        <ul>
        <li>
       Employee Name:${req.body.Ename}
        </li>
        <li>
      Employee Email:${req.body.Email}
        </li>
        <li>
       Leave date:${req.body.date}
        </li>
        <li></li>
        <li>
        Subject Type:${req.body.leavetype}
        </li>
        </ul>
        <p> Dear Sir/Mam</p>
        <p>${req.body.leaveReason}</p>
        <ul>
        </ul>
        `
       
        
        let transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            auth:{
                user:req.body.Email1,
                pass:req.body.password1
            }
        })
       
        let mailOptions={
            // from:'malharrathod88@gmail.com',
            to:req.body.cc,
            cc:req.body.Bcc,
            // replyTo:'test@testaccount.com',
            subject:'Leave',
            text:req.body.leaveReason,
            html:htmlEmail
        }
        transporter.sendMail(mailOptions,(err,info)=>{
            if (err){
                
                return err
            }
            return info.Email
            // console.log('message sent to',info.Email);
            // console.log('message URL is',nodemailer.getTestMessageUrl(info));
        })
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})

