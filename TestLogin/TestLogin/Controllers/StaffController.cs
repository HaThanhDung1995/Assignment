
using System.Collections.Generic;

using System.Linq;

using System.Web.Http;
using TestLogin.Models;

namespace TestLogin.Controllers
{
    public class StaffController : ApiController
    {
        LoginContext db = new LoginContext();

        public IHttpActionResult GetStaff()
        {
            var data = db.Staffs.ToList();
            var dung = new List<SubStaff>();

            foreach (var item in data)
            {
                var obj = new SubStaff()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Addr = item.Addr,
                    Phone = item.Phone
                };
                dung.Add(obj);
            }
            return Json(new { dung });
        }
        [HttpPost]
        public IHttpActionResult AddStaff([FromBody]Staff model)
        {

            if (model.Id == 0)
            {
                var item = db.Staffs.Add(model);
                db.SaveChanges();
                var objective = new SubStaff()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Addr = item.Addr,
                    Phone = item.Phone
                };
                return Json(new { objective });
            }
            return Json(new { });
        }
        [HttpGet]
        public IHttpActionResult Remove(int Id)
        {

            var data = "";
            var model = db.Staffs.Find(Id);
            db.Staffs.Remove(model);
            db.SaveChanges();
            data = "Success";
            return Json(new { data });
        }
        [HttpGet]
        [Route("api/GetStaff")]
        public IHttpActionResult GetStaff(int Id)
        {


            var model = db.Staffs.Find(Id);
            var objective = new SubStaff()
            {
                Id = model.Id,
                Name = model.Name,
                Phone = model.Phone,
                Addr = model.Addr
            };
            return Json(new { objective });
        }
        [HttpPost]
        [Route("api/UpdateStaff")]
        public IHttpActionResult UpdateStaff([FromBody]Staff model)
        {

            

                var data = db.Staffs.Find(model.Id);
                data.Name = model.Name;
                data.Phone = model.Phone;
                data.Addr = model.Addr;
                db.SaveChanges();
                var objective = new SubStaff()
                {
                    Id = data.Id,
                    Name = data.Name,
                    Phone = data.Phone,
                    Addr = data.Addr
                };
                return Json(new { objective });
            
            

            ;
        }
    }
}
