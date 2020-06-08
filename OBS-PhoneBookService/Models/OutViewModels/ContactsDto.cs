using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace OBS_PhoneBookService.Models.OutViewModels
{
    public class ContactsDto
    {
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Tel { get; set; }
        public string Cell { get; set; }
        public string Email { get; set; }
        public DateTime? UpdatedDate { get; set; }


        public ContactsDto() { }

        public ContactsDto(Contact contact)
        {
            this.FirstName = contact.FirstName;
            this.Surname = contact.Surname;
            this.Tel = contact.Tel;
            this.Cell = contact.Cell;
            this.Email = contact.Email;
            this.UpdatedDate = contact.UpdatedDate;
        }
    }

    public class ContactsViewModel
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "The {0} must be at least {2} characters long and no longer than {1} characters.", MinimumLength = 3)]
        [Display(Name = "FirstName")]
        public string FirstName { get; set; }

        [StringLength(50, ErrorMessage = "The {0} must be at least {2} characters long and no longer than {1} characters.", MinimumLength = 3)]
        [Display(Name = "Surname")]
        public string Surname { get; set; }

        [StringLength(50, ErrorMessage = "The {0} must be at least {2} characters long and no longer than {1} characters.", MinimumLength = 3)]
        [Display(Name = "Tel")]
        public string Tel { get; set; }

        [StringLength(50, ErrorMessage = "The {0} must be at least {2} characters long and no longer than {1} characters.", MinimumLength = 3)]
        [Display(Name = "Cell")]
        public string Cell { get; set; }

        [StringLength(50, ErrorMessage = "The {0} must be at least {2} characters long and no longer than {1} characters.", MinimumLength = 3)]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }
}