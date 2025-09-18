'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { id: 1,  UserName: 'naruto',   email: 'naruto@gmail.com',   password: '123', createdAt: new Date('2025-09-06 19:57:37'), updatedAt: new Date('2025-09-06 19:57:37') },
      { id: 2,  UserName: 'sasuke',   email: 'sasuke@gmail.com',   password: '$2b$08$EWWPsGfLTfsW/PZGXUkWH.9l.KQb2Y5qbc9//mWaghQ7Iji0yoVyK', createdAt: new Date('2025-09-06 20:32:31'), updatedAt: new Date('2025-09-06 20:32:31') },
      { id: 3,  UserName: 'sakura',   email: 'sakura@gmail.com',   password: '$2b$08$5Mo0k2.19qWo9qegJUdaeuHbfzpI81BpsO6IbiOr.LjRtSGxk8T6i', createdAt: new Date('2025-09-07 16:24:24'), updatedAt: new Date('2025-09-07 16:24:24') },
      { id: 5,  UserName: 'minato',   email: 'minato@gmail.com',   password: '$2b$08$nnYf7C7fzxf9l1HoN5cSe.fz1B.kNy0gkIONKlYQy.0q2Vnh3vjTS', createdAt: new Date('2025-09-07 16:55:01'), updatedAt: new Date('2025-09-07 16:55:01') },
      { id: 6,  UserName: 'kakshi',   email: 'kakashi@gmail.com',  password: '$2b$08$kYy6y5fUEdJY6N6wN0nJEOHBFz1VqQds0UZWFXKTPJJgmRBlc.GsO', createdAt: new Date('2025-09-09 07:59:46'), updatedAt: new Date('2025-09-09 07:59:46') },
      { id: 7,  UserName: 'newuser',  email: 'newuser@gmail.com',  password: '$2b$08$0txZPIbr6GoqY6WkuGav0eyyNDescfzIWt4MQ2nO8Y.bZ2T6Bz4Wi', createdAt: new Date('2025-09-09 08:41:27'), updatedAt: new Date('2025-09-09 08:41:27') },
      { id: 12, UserName: 'newuser1', email: 'newuser1@gmail.com', password: '$2b$08$Ecr8BAuEupI91sp1jZ9Wtua0cd5r6TOAWPKJkD/klJ1QtcT/e0O1m', createdAt: new Date('2025-09-10 19:35:23'), updatedAt: new Date('2025-09-10 19:35:23') },
      { id: 13, UserName: 'newuser2', email: 'newuser2@gmail.com', password: '$2b$08$CDzXIgW5/s0pFN7bMcm0m.5Jf8hjhmUeqnryoPABO56MyfGSuuXNS', createdAt: new Date('2025-09-11 05:06:29'), updatedAt: new Date('2025-09-11 05:06:29') },
      { id: 15, UserName: 'newuser3', email: 'newuser3@gmail.com', password: '$2b$08$XoT1Rk6ar/tbXhQdTnsoTeJYmxlC7FyyC5s1fOE6OKuM/d5BW1FSW', createdAt: new Date('2025-09-11 05:41:47'), updatedAt: new Date('2025-09-11 05:41:47') },
      { id: 17, UserName: 'newuser4', email: 'newuser4@gmail.com', password: '$2b$08$jsOvGODGWIGt77OcQSL6CuzA8x3sxhvUnLZDvLNNHO8LoC6GzXm9q', createdAt: new Date('2025-09-11 05:45:19'), updatedAt: new Date('2025-09-11 05:45:19') },
      { id: 18, UserName: 'newuser5', email: 'newuser5@gmail.com', password: '$2b$08$96t2GY8lFtGLTt76IOEQNeBte75jbNgwFmmBC.NiOvsGpoZOJF0Zi', createdAt: new Date('2025-09-11 06:01:41'), updatedAt: new Date('2025-09-11 06:01:41') },
      { id: 19, UserName: 'newuser6', email: 'newuser6@gmail.com', password: '$2b$08$E6o9Hz11Keu7DP119bJta.kfyc700tVKQu.MEw2EVxwFXBYDUmf6O', createdAt: new Date('2025-09-11 06:06:08'), updatedAt: new Date('2025-09-11 06:06:08') },
      { id: 20, UserName: 'newuser7', email: 'newuser7@gmail.com', password: '$2b$08$KyHNUyxn7nn7ftQVPg9uwOE4BSsp9hUc88xTB47pBo.pn8ZXwbe0.', createdAt: new Date('2025-09-11 06:28:28'), updatedAt: new Date('2025-09-11 06:28:28') },
      { id: 21, UserName: 'newuser8', email: 'newuser8@gmail.com', password: '$2b$08$itQ64Tp7uZcTXifFKg6qreiXPqegh9Rm1RXC.DG.xaX7DhWXMGwNC', createdAt: new Date('2025-09-11 06:31:02'), updatedAt: new Date('2025-09-11 06:31:02') },
      { id: 22, UserName: 'newuser9', email: 'newuser9@gmail.com', password: '$2b$08$ibwKtEnlDiWCFcUGXSAZLelQ4ngcILuzlGChubXSPXJjitZdA/0fa', createdAt: new Date('2025-09-11 06:58:04'), updatedAt: new Date('2025-09-11 06:58:04') },
      { id: 23, UserName: 'newuser10', email: 'newuser10@gmail.com', password: '$2b$08$wHPU.SMEjM26ZghFBs5cY.3.LqLp8BBFHdjL5O2mTZ3c1etJ1mXlK', createdAt: new Date('2025-09-11 09:18:04'), updatedAt: new Date('2025-09-11 09:18:04') },
      { id: 24, UserName: 'newuser11', email: 'newuser11@gmail.com', password: '$2b$08$YSxSgrfgeG5AZ.dYZlEQ1OeZDLDO1.owaEoDQQOH/V6vxncwbVy5i', createdAt: new Date('2025-09-11 09:49:29'), updatedAt: new Date('2025-09-11 09:49:29') },
      { id: 25, UserName: 'newuser13', email: 'tushar7436@gmail.com', password: '$2b$08$uj/z54piUSDVYUEm7gUZ9u0pJ/OcU5gXNxhEh1xJcVEjrBgnKzwES', createdAt: new Date('2025-09-15 09:07:54'), updatedAt: new Date('2025-09-15 09:07:54') },
      { id: 26, UserName: 'newuser14', email: 'newuser14@gmail.com', password: '$2b$08$MAhiTu7CtTc7nHP.qFpWXOqz/eT5qFfzZua9mTw5CEIFvoMX.gJCS', createdAt: new Date('2025-09-16 12:15:19'), updatedAt: new Date('2025-09-16 12:15:19') },
      { id: 27, UserName: 'newuser15', email: 'newuser15@gmail.com', password: '$2b$08$knApszzdpDChcuLzyQfF1uOzDn/yV2Ic8sMaa7JEkwPjGpcE7Zo/O', createdAt: new Date('2025-09-17 09:43:19'), updatedAt: new Date('2025-09-17 09:43:19') },
      { id: 28, UserName: 'newuser16', email: 'newuser16@gmail.com', password: '$2b$08$RZIg4kG1TuIVOjiIJJ8cBeIdK5UMq8TjF9.4iSA7tipMGcatjCaJW', createdAt: new Date('2025-09-17 09:44:25'), updatedAt: new Date('2025-09-17 09:44:25') },
      { id: 29, UserName: 'newuser17', email: 'newuser17@gmail.com', password: '$2b$08$nQLzea8ScbUVi8qFf9CMi.ZK9.dFreyXh0HJEj8Vt9X96SJ.fgGLy', createdAt: new Date('2025-09-17 09:52:14'), updatedAt: new Date('2025-09-17 09:52:14') },
      { id: 30, UserName: 'user18',   email: 'user18@gmail.com',   password: '$2b$08$A4FFzKJ3Nlew26Ok/4lgAeX7FojwiQvyFibVjUm0owdez3hCFlf76', createdAt: new Date('2025-09-17 10:03:20'), updatedAt: new Date('2025-09-17 10:03:20') },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { id: { [Op.in]: [1,2,3,5,6,7,12,13,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30] } });
  }
};
