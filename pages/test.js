



   
const phantom = require('phantom');


(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();

  await page.property('viewportSize', { width: 1024, height: 600 });
  const status = await page.open('https://useremi-shirtmaker.vercel.app/');
  console.log(`Page opened with status [${status}].`);

  await page.render('stackoverflow.png');
  console.log(`File created at [./stackoverflow.png]`);

  await instance.exit();
})

function hi(){
    return (
        <div>
            <h1>hi</h1>
        </div>

    )
}
export default hi;