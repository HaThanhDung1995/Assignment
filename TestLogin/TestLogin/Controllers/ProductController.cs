using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using TestLogin.Models;

namespace TestLogin.Controllers
{
    public class ProductController : ApiController
    {
        LoginContext db = new LoginContext();

       [HttpGet]
        public IHttpActionResult List()
        {
            var data = db.Products.ToList();
            var dung = new List<SubProduct>();

            foreach (var item in data)
            {
               
                var obj = new SubProduct()
                {
                    Id = item.Id,
                    Name = item.Name,
                    CategoryId = item.Category.Name,
                    Price = item.Price,
                    StoreId = item.Store.Name,
                    Img = item.Img
                };
                dung.Add(obj);
            }
            return Json(new { dung });
        }
        [HttpPost]
        public IHttpActionResult AddProduct()
        {


            string imageName = null;
            var name = HttpContext.Current.Request.Form["Name"];
            var price = Int32.Parse(HttpContext.Current.Request.Form["Price"]);
            var category1 = Int32.Parse(HttpContext.Current.Request.Form["Category"]);
            var store1 = Int32.Parse(HttpContext.Current.Request.Form["Store"]);


            var httpRequest = HttpContext.Current.Request;
            var postedfile = httpRequest.Files["image"];

            imageName = new String(Path.GetFileNameWithoutExtension(postedfile.FileName).Take(10).ToArray()).Replace(" ", "-");
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedfile.FileName);
            var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName);
            postedfile.SaveAs(filePath);
            Product customer = new Product()
            {
                Name = name,
                CategoryId = category1,
                StoreId = store1,
                Price = price,
                Img = imageName
            };
            var item = db.Products.Add(customer);

            db.SaveChanges();
                var catgory = db.Categories.Find(item.CategoryId);
                var store = db.Stores.Find(item.StoreId);
                var obj = new SubProduct()
                {
                    Id = item.Id,
                    Name = item.Name,
                    CategoryId = catgory.Name,
                    Price = item.Price,
                    StoreId = store.Name,
                   Img = item.Img
                };
                return Json(new { obj });
            
        }
        [HttpGet]
        public IHttpActionResult Remove(int Id)
        {

            var data = "";
            var model = db.Products.Find(Id);
            db.Products.Remove(model);
            db.SaveChanges();
            data = "Success";
            return Json(new { data });
        }
        [HttpGet]
        [Route("api/GetProduct")]
        public IHttpActionResult GetProduct(int Id)
        {


            var item = db.Products.Find(Id);
          var objective = new SubProduct2()
                {
                    Id = item.Id,
                    Name = item.Name,
                    CategoryId = item.CategoryId,
                    Price = item.Price,
                    StoreId = item.StoreId
                };
            return Json(new { objective });
        }
        [HttpPost]
        [Route("api/UpdateProduct")]
        public IHttpActionResult UpdateProduct([FromBody]Product model)
        {


            var data = db.Products.Find(model.Id);
            data.Name = model.Name;
            data.Price = model.Price;
            data.CategoryId = model.CategoryId;
            data.StoreId = model.StoreId;
      
            db.SaveChanges();
            var catgory = db.Categories.Find(data.CategoryId);
            var store = db.Stores.Find(data.StoreId);
            

            var objective = new SubProduct()
            {
                Id = data.Id,
                Name = data.Name,
                CategoryId = catgory.Name,
                Price = data.Price,
                StoreId = store.Name
            };
            return Json(new { objective });

            ;
        }
    }
}
