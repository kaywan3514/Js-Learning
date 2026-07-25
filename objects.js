// مدیر گروه رشته قانون
var user_Law = {
  firstName: 'kaywan',
  lastName: 'maleki',
  age: 30,
  address: {
    country: 'iran',
    city: 'tehran',
    PostalCode: '6622145158',
  },
  job: ['teacher', 'developer', 'universityProfessor'],
  gender: 'male',
  room: 201,
};

// مدیر گروه مهندسی کشاورزی
var user_Agronomic = {
  firstName: 'Arezo',
  lastName: 'Salehi',
  age: 25,
  address: {
    country: 'Iran',
    city: 'Shiraz',
    PostalCode: '147859617',
  },
  isfeMale: true,
  room: 220,
};

// مدیر گروه کامپیوتر
var user_Computer = {
  firstName: 'Majid',
  lastName: 'Alikhani',
  age: 38,
  address: {
    country: 'Iran',
    city: 'Esfehan',
    PostalCode: '75826952227',
  },
  isMale: true,
  room: 208,
};

// آبجکت مسئول کتابخانه:
var user_Library = {
  firstName: 'kaywan',
  lastName: 'maleki',
  age: 30,
  address: {
    country: 'Iran',
    city: 'Tehran',
    PostalCode: '178294136',
  },
  job: ['teacher'],
  gender: 'male',
  room: 198,
};

// آبجکت دانشگاه :
var uniVersity = {
  name: 'Razi',
  address: {
    country: 'Iran',
    city: 'Tehran',
    PostalCode: '154-758-236',
  },
  // دانشکده ها
  colleges: [
    {
      // علوم انسانی
      name: 'Humanities',
      establishment: 1396,
      // مدیر گروه رشته حقوق
      departmentHead: user_Law,
      // رشته ها
      fields: [
        {
          // رشته حقوق
          name: 'Law',
          rank: 2,
          room: 201,
          students: [
            {
              firstName: 'Ali',
              lastName: 'Moradi',
              age: 25,
              fieldOfStudy: 'Tajrobi',
              idNumber: 4582,
              isMale: true,
              lessons: [
                {
                  name: 'Law_car',
                  score: 14.3,
                  unit: 3,
                },
                {
                  name: 'Law_Tejarat',
                  score: 19,
                  unit: 4,
                },
                {
                  name: 'Law_Madani',
                  score: 16,
                  unit: 1,
                },
              ],
            },
            {
              firstName: 'Reza',
              lastName: 'Nadimi',
              age: 20,
              fieldOfStudy: 'Ryazi',
              idNumber: 3514,
              gender: 'male',
              lessons: [
                {
                  name: 'Law_car',
                  score: 14,
                  unit: 3,
                },
                {
                  name: 'Law_Tejarat4',
                  score: 16,
                  unit: 4,
                },
                {
                  name: 'Law_Madani3',
                  score: 18,
                  unit: 3,
                },
              ],
            },
            {
              firstName: 'Mitra',
              lastName: 'Azizi',
              age: 22,
              fieldOfStudy: 'Humanities',
              idNumber: 1547,
              gender: 'female',
              lessons: [
                {
                  name: 'Law_Asasi',
                  score: 18.75,
                  unit: 4,
                },
                {
                  name: 'Law_Binolmelal',
                  score: 16.25,
                  unit: 3,
                },
                {
                  name: 'Law_Madani',
                  score: 17,
                  unit: 2,
                },
              ],
            },
          ],
        },
        {
          // جامعه شناسی
          name: 'Sociology',
          rank: 4,
          room: 205,
          students: [
            {
              firstName: 'Zainab',
              lastName: 'Abdolmaleki',
              age: 24,
              fieldOfStudy: 'Ensani',
              idNumber: 751496,
              isMale: false,
              lessons: [
                {
                  name: 'book_Identity',
                  score: 18,
                  unit: 4,
                },
                {
                  name: 'Book_Sociology',
                  score: 19,
                  unit: 3,
                },
                {
                  name: 'Preliminary_Sociology',
                  score: 19.75,
                  unit: 1,
                },
              ],
            },
            {
              firstName: 'Farhad',
              lastName: 'Vaziri',
              age: 28,
              fieldOfStudy: 'Technical',
              idNumber: 104280,
              isMale: true,
              lessons: [
                {
                  name: 'book_Retionality',
                  score: 17.25,
                  unit: 2,
                },
                {
                  name: 'Book_popolism',
                  score: 12,
                  unit: 1,
                },
                {
                  name: 'Anatomi_Sociology',
                  score: 13,
                  unit: 3,
                },
              ],
            },
          ],
        },
        {
          // انسان شناسی
          name: 'Enthropology',
          rank: 1,
          room: 208,
          students: [
            {
              firstName: 'Mehdi',
              lastName: 'Rostami',
              age: 26,
              fieldOfStudy: 'Tajrobi',
              idNumber: 18912730,
              isMale: true,
              lessons: [
                {
                  name: 'Ancient_Society',
                  score: 19,
                  unit: 3,
                },
                {
                  name: 'Enthropology_Farhangi',
                  score: 14,
                  unit: 1,
                },
                {
                  name: 'Book_Personality',
                  score: 17,
                  unit: 2,
                },
              ],
            },
          ],
        },
      ],
    },

    {
      // مهندسی برق و کامپیوتر
      name: 'Electrical and Computer',
      establishment: 1372,
      // مدیر گروه رشته کامپیوتر
      departmentHead: user_Computer,
      // رشته ها
      fields: [
        {
          // رشته مهندسی فناوری اطلاعات
          name: 'InformationTechnology',
          rank: 5,
          room: 208,
          students: [
            {
              firstName: 'Sara',
              lastName: 'Nadri',
              age: 21,
              fieldOfStudy: 'Riazi',
              idNumber: 1782397931,
              isMale: false,
              lessons: [
                {
                  name: 'Tarahi_Algoritm',
                  score: 14,
                  unit: 3,
                },
                {
                  name: 'Sql_Server',
                  score: 19,
                  unit: 2,
                },
                {
                  name: 'Modiryat_control_project',
                  score: 17,
                  unit: 4,
                },
              ],
            },
            {
              firstName: 'Zahra',
              lastName: 'Veysi',
              age: 17,
              fieldOfStudy: 'Tjrobi',
              idNumber: 46739128,
              gender: 'female',
              lessons: [
                {
                  name: 'network',
                  score: 18.25,
                  unit: 1,
                },
                {
                  name: 'Security',
                  score: 12,
                  unit: 2,
                },
                {
                  name: 'Trahi_Algoritm',
                  score: 15,
                  unit: 3,
                },
              ],
            },
            {
              firstName: 'Ramin',
              lastName: 'Alizadeh',
              age: 24,
              fieldOfStudy: 'Humanities',
              idNumber: 178419632,
              gender: 'male',
              lessons: [
                {
                  name: 'Tejarat_Electronic',
                  score: 16.75,
                  unit: 3,
                },
                {
                  name: 'Physics',
                  score: 20,
                  unit: 2,
                },
                {
                  name: 'Sports',
                  score: 19,
                  unit: 1,
                },
              ],
            },
          ],
        },
        {
          // مهندسی گرایش نرم افزار
          name: 'software',
          rank: 4,
          room: 210,
          students: [
            {
              firstName: 'Zainab',
              lastName: 'Abdolmaleki',
              age: 24,
              fieldOfStudy: 'Ensani',
              idNumber: 748596225,
              isMale: false,
              lessons: [
                {
                  name: 'ICDL',
                  score: 20,
                  unit: 2,
                },
                {
                  name: 'WordPress',
                  score: 19,
                  unit: 3,
                },
                {
                  name: 'Excell',
                  score: 19.75,
                  unit: 1,
                },
              ],
            },
            {
              firstName: 'Mona',
              lastName: 'Amiri',
              age: 20,
              fieldOfStudy: 'Technical',
              idNumber: 104250485,
              isfeMale: true,
              lessons: [
                {
                  name: 'Matlab',
                  score: 17.25,
                  unit: 2,
                },
                {
                  name: 'Flowchart',
                  score: 20,
                  unit: 3,
                },
                {
                  name: 'Mabani_Computer',
                  score: 13,
                  unit: 1,
                },
              ],
            },
          ],
        },
        {
          // مهندسی کامپیوتر گرایش مخابرات
          name: 'Comminucation',
          rank: 1,
          room: 214,
          students: [
            {
              firstName: 'Saman',
              lastName: 'Dehghan',
              age: 32,
              fieldOfStudy: 'mathematics',
              idNumber: 18001458236,
              isMale: true,
              lessons: [
                {
                  name: 'Mabani_Electronic',
                  score: 15,
                  unit: 3,
                },
                {
                  name: 'Madar_microElectronic',
                  score: 18,
                  unit: 1,
                },
                {
                  name: 'Mabani_System_Electronic',
                  score: 10,
                  unit: 2,
                },
              ],
            },
          ],
        },
      ],
    },

    {
      // مهندسی کشاورزی
      name: 'Agricultural_Engineering',
      establishment: 1365,
      // مدیر گروه رشته مهندسی کشاورزی
      departmentHead: user_Agronomic,
      // رشته ها
      fields: [
        {
          // رشته مهندسی آب
          name: 'WaterEngineering',
          rank: 4,
          room: 220,
          students: [
            {
              firstName: 'Afshin',
              lastName: 'Asadi',
              age: 34,
              fieldOfStudy: 'Math',
              idNumber: 45821455866,
              isMale: true,
              lessons: [
                {
                  name: 'SazeAbi',
                  score: 16,
                  unit: 3,
                },
                {
                  name: 'System_Abyari',
                  score: 19,
                  unit: 4,
                },
                {
                  name: 'Differential',
                  score: 20,
                  unit: 1,
                },
              ],
            },
          ],
        },
      ],
    },

    {
      // بخش های اداری دانشکده
      administrativeDepartements: [
        {
          // مدیر گروه ها
          departementHeads: [
            {
              // مدیر گروه انسانی
              user_Law: {
                firstName: 'kaywan',
                lastName: 'maleki',
                age: 30,
                address: {
                  country: 'iran',
                  city: 'tehran',
                  PostalCode: '6622145158',
                },
                job: ['teacher', 'developer', 'universityProfessor'],
                gender: 'male',
                room: 201,
              },
            },
            {
              // مدیر گروه کامپیوتر
              user_Computer: {
                firstName: 'Majid',
                lastName: 'Alikhani',
                age: 38,
                address: {
                  country: 'Iran',
                  city: 'Esfehan',
                  PostalCode: '75826952227',
                },
                isMale: true,
                room: 208,
              },
            },
            {
              // مدیر گروه مهندسی کشاورزی
              user_Agronomic: {
                firstName: 'Arezo',
                lastName: 'Salehi',
                age: 25,
                address: {
                  country: 'Iran',
                  city: 'Shiraz',
                  PostalCode: '147859617',
                },
                isfeMale: true,
                room: 220,
              },
            },
          ],
        },
        {
          // رئیس دانشکده
          dean_OF_Faculty: {
            firstName: 'Azad',
            lastName: 'Sadeghi',
            age: 50,
            address: {
              country: 'Iran',
              city: 'Sanandej',
              PostalCode: 4005785211933,
            },
            job: ['universityProfessor'],
            gender: 'male',
            room: 201,
          },
        },
        {
          self_Servis: {
            manager: 'Mr.Akbari',
            cook: 'Ms.Rezai',
            sanitaryFacilites: true,
            capacity: 2500,
            managmentOffice: 'Hamed Hosini',
            salon: ['Genteleman', 'ladies', 'Professors'],
            reservesCategory: [
              {
                name: 'breakFast',
                food: [
                  {
                    name: 'Lentil',
                    ingrediants: 'bread , lentil',
                  },
                  {
                    name: 'Sausage and eggs',
                    ingrediants: 'bread , Sausage , eggs',
                  },
                ],
              },
              {
                name: 'cold_drink',
                Drink: [
                  {
                    name: 'Lemonade',
                    productionData: 1405,
                    reseving: true,
                    ingrediants: 'Sugar , Lime , Ice , Water ',
                    time: 14,
                  },
                  {
                    name: 'StrawberrySyrup',
                    productionData: 1405,
                    reseving: false,
                    time: 12,
                    ingrediants: 'Strawberry,Sugar , Lime , Ice , Water ',
                  },
                ],
                name: 'Hot_drink',
                Drink: [
                  {
                    name: 'Espresso',
                    productionData: 1405,
                    reseving: true,
                  },
                  {
                    name: 'HotChocolate',
                    productionData: 1405,
                    reseving: false,
                  },
                ],
              },
              {
                name: 'Lunch',
                food: [
                  {
                    name: 'cheloMahi',
                    time: 12,
                    reseving: true,
                    ingrediants: 'Fish,Rice',
                  },
                  {
                    name: 'cheloKebab',
                    time: 12.3,
                    reseving: false,
                    ingrediants: 'Meat,Rice',
                  },
                ],
              },
            ],
          },
        },
        {
          name: 'Educational_Unit',
          // امکانات فیزیکی
          Physical_Facilities: [
            'classRoom',
            'Laboratory',
            'WorkShop',
            'Sports_Facility',
          ],
          library: [
            {
              manager: user_Library,
              authorizedVisitors: ' Students , Professor',
              makerSpace: true,
              members: [
                {
                  students: ['kaywan', 'reza', 'ali', 'zainab'],
                  memberShip_Id: 1525,
                  address: {
                    country: 'Iran',
                    city: 'Esfahan',
                    PostalCode: '720758475',
                  },
                  telNumber: '0098256358',
                },
              ],
            },
            {
              books: [
                {
                  name: 'book1',
                  NumberPages: 175,
                  subject: 'X',
                },
                {
                  name: 'book2',
                  NumberPages: 100,
                  subject: 'Y',
                },
              ],
            },
            {
              rouls: ['Silent', 'Active'],
            },
            {
              cages: {
                name: 'first_Floor',
                kotob: {
                  sort: 'Computer',
                  topics: {
                    name: 'tarahiAlgoritm',
                    numPages: 320,
                    order: true,
                    Existance: true,
                  },
                },
                name: 'Secound_Floor',
                kotob: {
                  sort: 'Architecture',
                  topics: {
                    name: 'tarahiAlgoritm',
                    numPages: 250,
                    order: true,
                    Existance: false,
                  },
                },
              },
            },
          ],
        },
      ],
    },
  ],
  yearofEstableshment: 1370,
  levels_Stusy: [
    'Associate degree',
    'Bachelors degree',
    'Masters degree',
    'PHD',
  ],
  uniVersityPresident: 'Mr.Aliabadi',
  rate: 4.5,
  // دوره های تحصیلی دانشگاه
  uniVersityAcademicPrograms: [
    {
      name: 'Daily',
      cost: '1500$',
      self_Servis: true,
    },
    {
      name: 'Nocturnal',
      cost: '900$',
      self_Servis: false,
    },
    {
      name: 'Autonomous',
      cost: '2500$',
      self_Servis: true,
      travelExpenses: 'free',
      amenities: true,
    },
  ],
};
// اتاق مدیر گروه های هر کدام از رشته ها
console.log(uniVersity.colleges[0].departmentHead.room);
console.log(uniVersity.colleges[1].departmentHead.room);
console.log(uniVersity.colleges[2].departmentHead.room);
// دانشجو رامین علیزاده رشته مهندسی فناوری اطلاعات نمره گرفته شده تو درس تجارت الکترونیک
console.log(uniVersity.colleges[1].fields[0].students[2].lessons[0].score);
// شماره دانشجویی دانشجو رامین علیزاده رشته مهندسی فناوری اطلاعات
console.log(uniVersity.colleges[1].fields[0].students[2].idNumber);
console.log(uniVersity.colleges[2].establishment);
console.log(uniVersity.colleges[0].fields[2].students[0].lessons[2].unit);
