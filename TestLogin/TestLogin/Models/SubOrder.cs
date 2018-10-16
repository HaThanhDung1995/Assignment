using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestLogin.Models
{
    public class SubOrder
    {
        public int Id { get; set; }

        
        public string DateT { get; set; }

        public string CustomerId { get; set; }
        public string StaffId { get; set; }
        public int TotalPrice { get; set; }
    }
}