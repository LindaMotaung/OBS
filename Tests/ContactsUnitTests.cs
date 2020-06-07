using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OBS_PhoneBookService.Controllers;

namespace Tests
{
    [TestClass]
    public class ContactsUnitTests
    {
        //Arrange
        private int contactID = 0;

        [TestMethod]
        public void GetListOfContacts()
        {
            //Arrange

            //Act

            //Assert
        }

        [TestMethod]
        public void GetSingleContact()
        {
            //Arrange
            contactID = 1;

            //Act
            ContactsController contactsController = new ContactsController();
            var result = contactsController.Get(contactID);
            //Assert
        }

        [TestMethod]
        public void CreateContact()
        {
            //Arrange

            //Act

            //Assert
        }

        [TestMethod]
        public void UpdateContact()
        {
            //Arrange
            contactID = 1;

            //Act

            //Assert
        }

        [TestMethod]
        public void DeleteContact()
        {
            //Arrange
            contactID = 1;

            //Act

            //Assert
        }

        /*
       When we try tp get an invidivual contact in the address book by passing in an invalid contact ID, this will cause a NullReference Exception
       This is an expected exception that we are testing against
       */
        //[TestMethod]
        //[ExpectedException(typeof(NullReferenceException))]
        //public void InvalidContactRequest()
        //{
        //    //Arrange
        //    contactID = 0;

        //    //Act
        //    ContactsController contactsControllr = new ContactsController();
        //    contactsControllr.Get(contactID);
        //}
    }
}
