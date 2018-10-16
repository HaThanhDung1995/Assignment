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
    public class CustomerController : ApiController
    {
        LoginContext db = new LoginContext();

        public IHttpActionResult GetCustomer()
        {
            var data = db.Customers.ToList();
            var dung = new List<SubCustomer>();

            foreach (var item in data)
            {
                var obj = new SubCustomer()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Addr = item.Addr,
                    Img = item.Img,
                    Phone = item.Phone
                };
                dung.Add(obj);
            }
            return Json(new { dung });
        }
        [HttpPost]
        public IHttpActionResult AddCategory()
        {

            string imageName = null;
            var name = HttpContext.Current.Request.Form["Name"];
            var phone = HttpContext.Current.Request.Form["Phone"];
            
            var addr = HttpContext.Current.Request.Form["Addr"];
            

            var httpRequest = HttpContext.Current.Request;
            var postedfile = httpRequest.Files["image"];

            imageName = new String(Path.GetFileNameWithoutExtension(postedfile.FileName).Take(10).ToArray()).Replace(" ", "-");
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedfile.FileName);
            var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName);
            postedfile.SaveAs(filePath);
            Customer customer = new Customer()
            {
                Name = name,
                Phone = phone,
                Addr = addr,
                Img = imageName
            };
            var data = db.Customers.Add(customer);
                db.SaveChanges();
                var objective = new SubCustomer()
                {
                    Id = data.Id,
                    Name = data.Name,
                    Phone = data.Phone,
                    Img = data.Img,
                    Addr = data.Addr
                };
                return Json(new { objective });
            
           
        }
        [HttpGet]
        public IHttpActionResult Remove(int Id)
        {

            var data = "";
            var model = db.Categories.Find(Id);
            db.Categories.Remove(model);
            db.SaveChanges();
            data = "Success";
            return Json(new { data });
        }
        [HttpGet]
        [Route("api/GetCustomer")]
        public IHttpActionResult GetCustomer(int Id)
        {


            var model = db.Customers.Find(Id);
            var objective = new SubCustomer()
            {
                Id = model.Id,
                Name = model.Name,
                Phone = model.Phone,
                Addr = model.Addr,
                Img = model.Img
            };
            return Json(new { objective });
        }
        [HttpPost]
        [Route("api/UpdateCustomer")]
        public IHttpActionResult UpdateCustomer([FromBody]Customer model)
        {


            var data = db.Customers.Find(model.Id);
            data.Name = model.Name;
            data.Addr = model.Addr;
            data.Phone = model.Phone;
            db.SaveChanges();
            var objective = new SubCustomer()
            {
                Id = data.Id,
                Name = data.Name,
                Phone = data.Phone,
                Addr = data.Addr,
                Img = data.Img
            };
            return Json(new { objective });

            ;
        }
    }
}

