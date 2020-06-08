using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.AspNet.Identity;
using OBS_PhoneBookService.Models.OutViewModels;

namespace OBS_PhoneBookService.Controllers
{
    [RoutePrefix("api/contacts")]
    public class ContactsController : ApiController
    {
        private readonly OBSEntities db = new OBSEntities();

        public IEnumerable<Contact> Get()
        {
            using (db)
            {
                return db.Contacts.ToList();
            }
        }

        public Contact Get(int id)
        {
            using (db)
            {
                var result = db.Contacts.FirstOrDefault(x => x.ID == id);
                if (result == null)
                    throw new NullReferenceException("Requested Contact ID is Invalid");

                return result;
            }
        }

        [HttpPost]
        [Route("create")]
        public async Task<IHttpActionResult> Create(ContactsViewModel model)
        {
            if (ModelState.IsValid)
            {
                var contact = new Contact
                {
                    FirstName = model.FirstName,
                    Surname = model.Surname,
                    Tel = model.Tel,
                    Cell = model.Cell,
                    Email = model.Email,
                    UpdatedDate = DateTime.UtcNow
                };

                db.Contacts.Add(contact);
                await db.SaveChangesAsync();

                return Ok(new ContactsDto(contact));
            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("update")]
        public async Task<IHttpActionResult> Update(ContactsViewModel model)
        {
            if (ModelState.IsValid)
            {
                var contact = await db.Contacts.FindAsync(model.Id);
                if (contact == null)
                {
                    throw new NullReferenceException("Requested Contact ID is Invalid");
                }

                contact.FirstName = model.FirstName;
                contact.Surname = model.Surname;
                contact.Tel = model.Tel;
                contact.Cell = model.Cell;
                contact.Email = model.Email;
                contact.UpdatedDate = DateTime.UtcNow;

                await db.SaveChangesAsync();

                return Ok(new ContactsDto(contact));
            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("delete")]
        public async Task<IHttpActionResult> Delete(ContactsViewModel model)
        {
            if (ModelState.IsValid)
            {
                var contact = new Contact { ID = model.Id };
                db.Contacts.Attach(contact);
                db.Contacts.Remove(contact);
                await db.SaveChangesAsync();

                return Ok(new ContactsDto(contact));
            }

          return BadRequest(ModelState);
        }
    }
}
