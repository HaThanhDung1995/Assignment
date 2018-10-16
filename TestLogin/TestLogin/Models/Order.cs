namespace TestLogin.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Order
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string DateT { get; set; }

        public int? CustomerId { get; set; }

        public int? StaffId { get; set; }
        public int TotalPrice { get; set; }

        public virtual Customer Customer { get; set; }

        public virtual Staff Staff { get; set; }
    }
}
