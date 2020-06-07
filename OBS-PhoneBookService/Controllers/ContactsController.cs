using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OBS_PhoneBookService.Controllers
{
    public class ContactsController : ApiController
    {
        public IEnumerable<Contact> Get()
        {
            using (var db = new OBSEntities())
            {
                return db.Contacts.ToList();
            }
        }

        public Contact Get(int id)
        {
            using (var db = new OBSEntities())
            {
                var result = db.Contacts.FirstOrDefault(x => x.ID == id);
                if (result == null)
                    throw new NullReferenceException("Requested Contact ID is Invalid");

                return result;
            }
        }

        public void Update(int id) { }

        public void Create() { }

        public void Delete(int id) { }
    }
}
