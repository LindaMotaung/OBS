using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OBS_PhoneBookService.Controllers;
using OBS_PhoneBookService.Models.OutViewModels;
using System.Data.Entity;
using System.Linq;
using System.Collections.Generic;

namespace Tests
{
    [TestClass]
    public class ContactsUnitTests
    {
        //Arrange
        private int contactID = 0;
        private ContactsController contactsController = new ContactsController();
        private OBSEntities db = new OBSEntities();

        [TestMethod]
        public void GetListOfContacts()
        {
            //Act
            var result = contactsController.Get().ToList();

            //Assert
            List<Contact> dbResult = new List<Contact>();
            using (db)
                dbResult = db.Contacts.ToList();

            Assert.IsTrue(result.Equals(dbResult));
        }

        [TestMethod]
        public void GetSingleContact()
        {
            //Arrange
            contactID = 1;

            //Act         
            var result = contactsController.Get(contactID);

            //Assert
            Contact getSingleRecord = new Contact();
            using (db)
            {
                getSingleRecord = db.Contacts.FirstOrDefault(x => x.ID == contactID);              
            }

            Assert.IsTrue(getSingleRecord != null);
        }

        [TestMethod]
        public void CreateContact()
        {
            //Arrange
            ContactsViewModel contactsModel = new ContactsViewModel();
            contactsModel.FirstName = "Linda";
            contactsModel.Surname = "Motaung";
            contactsModel.Tel = "0827360066";
            contactsModel.Cell = "0827360066";
            contactsModel.Email = "motaung.linda@gmail.com";

            string expected = contactsModel.FirstName;

            //Act
            var result = contactsController.Create(contactsModel);

            //Assert
            Contact dbResult = new Contact();
            using (db)
                dbResult = db.Contacts.FirstOrDefault(x => x.FirstName.Contains(expected));

            Assert.IsTrue(dbResult != null);
        }

        [TestMethod]
        public void UpdateContact()
        {
            //Arrange
            contactID = 1;
            ContactsViewModel contactsModel = new ContactsViewModel();
            contactsModel.FirstName = "Linda";
            contactsModel.Surname = "Frank"; //Updated surname
            contactsModel.Tel = "0827360066";
            contactsModel.Cell = "0827360066";
            contactsModel.Email = "motaung.linda@gmail.com";

            string expected = contactsModel.FirstName;
            string updatedSurname = contactsModel.Surname;

            //Act
            var result = contactsController.Update(contactsModel);

            //Assert
            Contact getUpdatedValue = new Contact(); ;
            using (db)
                getUpdatedValue = db.Contacts.FirstOrDefault(x => x.FirstName == expected);

            Assert.IsTrue(getUpdatedValue.Surname == updatedSurname);
        }

        [TestMethod]
        public void DeleteContact()
        {
            //Arrange
            contactID = 1;
            ContactsViewModel contactsModel = new ContactsViewModel();
            contactsModel.Id = contactID;
            int expected = contactsModel.Id;

            //Act
            var deleteResult = contactsController.Delete(contactsModel);

            //Assert
            Contact deletedRecord = new Contact();
            using (db)
                deletedRecord = db.Contacts.FirstOrDefault(x => x.ID == expected);

            Assert.IsTrue(deletedRecord == null);
        }

        /*
       When we try tp get an invidivual contact in the address book by passing in an invalid contact ID, this will cause a NullReference Exception
       This is an expected exception that we are testing against
       */
        [TestMethod]
        [ExpectedException(typeof(NullReferenceException))]
        public void InvalidContactRequest()
        {
            //Arrange
            contactID = 0;

            //Act
            ContactsController contactsControllr = new ContactsController();
            contactsControllr.Get(contactID);
        }
    }
}
