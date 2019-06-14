const axios = require('axios')

class clashRoyale{
    static getsCard(req, res, next){
    	console.log('trigger')
    	axios({
		  method: 'GET',
		  url: 'https://api.clashroyale.com/v1/cards',
		  headers: {
		    authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMwYWE3ZGY0LWMwNmUtNDllMy05YmU3LTY4MjU0NTIwZTE2OCIsImlhdCI6MTU2MDUwMDA4Niwic3ViIjoiZGV2ZWxvcGVyLzNjNGQ5YmM0LTlmYjctMWI5MS00YzFkLWQ3ZGQxMjc2MjU4MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMzkuMjI4LjExMS4xMjUiXSwidHlwZSI6ImNsaWVudCJ9XX0.MBF_cepffZNwiPSGSKJPLa2hTRGk8gFpxIv9vXf0OrtdqTEYeQTEqqjcuV08kVQUeWbtt40EY5bKohUF9CBSog',
		    Accept: 'application/json'
  			}	
  		}).then(function ({data}) {
  			// console.log(data.items)
  			res.json(data.items)
		}).catch(next)
        // axios.get('https://api.clashroyale.com/v1/cards', {headers : {authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMwYWE3ZGY0LWMwNmUtNDllMy05YmU3LTY4MjU0NTIwZTE2OCIsImlhdCI6MTU2MDUwMDA4Niwic3ViIjoiZGV2ZWxvcGVyLzNjNGQ5YmM0LTlmYjctMWI5MS00YzFkLWQ3ZGQxMjc2MjU4MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMzkuMjI4LjExMS4xMjUiXSwidHlwZSI6ImNsaWVudCJ9XX0.MBF_cepffZNwiPSGSKJPLa2hTRGk8gFpxIv9vXf0OrtdqTEYeQTEqqjcuV08kVQUeWbtt40EY5bKohUF9CBSog', Accept : 'application/json'}})
        // .then((items) => {
        // 	console.log('hasil')
        //     res.status(200).json(items)
        // })
        // .catch(next)
    }
}

module.exports = clashRoyale