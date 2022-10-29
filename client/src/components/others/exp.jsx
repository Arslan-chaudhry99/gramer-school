for (let index = 1; index < 10; index++) {
  console.log(`phse ${index}-------`);
  for (let i = 1; i < 100; i++) {
    const setAdmission = async () => {
      const user = new Admission({
        name: "Arslan",
        motherName: "ABC",
        cnic: "1234",
        status: "Student",
        fatherName: "ABC",
        phone: 123,
        fee: 900,
        address: "GK",
        dateBirth: "27 oct",
        classname: index,
        rollNumber: i,
        education: "ABC",
        currentStatus: true,
      });
      const registerUser = await user.save();
      if (registerUser) {
        console.log(`part ${i}`);
      }
    };
  }
}
