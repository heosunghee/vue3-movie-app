exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'sunghee',
      age: 23,
      email: 'tjdgml211018@naver.com'
    })
  }
}