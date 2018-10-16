using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestLogin.Models;

namespace TestLogin.Controllers
{
    public class OrderController : ApiController
    {
        LoginContext db = new LoginContext();

        [HttpGet]
        public IHttpActionResult List()
        {
            var data = db.Orders.ToList();
            var dung = new List<SubOrder>();

            foreach (var item in data)
            {

                var obj = new SubOrder()
                {
                    Id = item.Id,
                    CustomerId = item.Customer.Name,
                    DateT = item.DateT,
                    StaffId = item.Staff.Name,
                    TotalPrice = item.TotalPrice
                };
                dung.Add(obj);
            }
            return Json(new { dung });
        }
        [HttpPost]
        public IHttpActionResult AddOrder([FromBody]Order model)
        {

            if (model.Id == 0)
            {
                var item = db.Orders.Add(model);
                db.SaveChanges();
                var staff = db.Staffs.Find(item.StaffId);
                var customer = db.Customers.Find(item.CustomerId);
                var obj = new SubOrder()
                {
                    Id = item.Id,
                    CustomerId = staff.Name,
                    DateT = item.DateT,
                    StaffId = customer.Name,
                    TotalPrice = item.TotalPrice
                };
                return Json(new { obj });
            }
            return Json(new { });
        }
        [HttpGet]
        public IHttpActionResult Remove(int Id)
        {

            var data = "";
            var model = db.Orders.Find(Id);
            db.Orders.Remove(model);
            db.SaveChanges();
            data = "Success";
            return Json(new { data });
        }
        [HttpGet]
        [Route("api/GetOrder")]
        public IHttpActionResult GetOrder(int Id)
        {


            var item = db.Orders.Find(Id);
            var objective = new SubOrder2()
            {
                Id = item.Id,
                CustomerId = item.CustomerId,
                DateT = item.DateT,
                StaffId = item.StaffId,
                TotalPrice = item.TotalPrice
            };
            return Json(new { objective });
        }
        [HttpPost]
        [Route("api/UpdateOrder")]
        public IHttpActionResult UpdateOrder([FromBody]Order model)
        {


            var data = db.Orders.Find(model.Id);
            data.DateT = model.DateT;
            data.CustomerId = model.CustomerId;

            db.SaveChanges();

            var staff = db.Staffs.Find(data.StaffId);
            var customer = db.Customers.Find(data.CustomerId);
            var objective = new SubOrder()
            {
                Id = data.Id,
                CustomerId = staff.Name,
                DateT = data.DateT,
                StaffId = customer.Name,
                TotalPrice = data.TotalPrice
            };
            return Json(new { objective });

            ;
        }
    }
}
