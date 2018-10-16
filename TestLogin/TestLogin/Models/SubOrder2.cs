using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestLogin.Models
{
    public class SubOrder2
    {
        public int Id { get; set; }

        
        public string DateT { get; set; }

        public int? CustomerId { get; set; }
        public int? StaffId { get; set; }
        public int TotalPrice { get; set; }
    }
}