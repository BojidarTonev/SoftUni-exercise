﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductShop.Models
{
    public class User
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        [MinLength(3)]
        public string LastName { get; set; }

        public int? Age { get; set; }

        public ICollection<Product> ProductsSold { get; set; }
        public ICollection<Product> ProductsBought { get; set; }
    }
}
