(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Name || client.Name.indexOf(filter.Name) > -1)
                    && (filter.Age === undefined || client.Age === filter.Age)
                    && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;


    db.countries = [
        { Name: "", Id: 0 },
        { Name: "Việt Nam", Id: 1 },
        { Name: "Canada", Id: 2 },
        { Name: "Mỹ", Id: 3 },
        { Name: "Pháp", Id: 4 },
        { Name: "Nga", Id: 5 },
        { Name: "Nhật Bản", Id: 6 },
        { Name: "Russia", Id: 7 }
    ];

    db.clients = [
        {
            "Name": "Nguyễn Văn A",
            "Age": 35,
            "Country": 1,
            "Address": "Số 12, ngõ 45, phố Lê Duẩn, Hà Nội",
            "Married": true
        },
        {
            "Name": "Trần Thị Bình",
            "Age": 28,
            "Country": 1,
            "Address": "123 đường Lê Lợi, phường Bến Nghé, Quận 1, TP.HCM",
            "Married": false
        },
        {
            "Name": "Lê Hoàng Công",
            "Age": 42,
            "Country": 1,
            "Address": "45/12 đường 3/2, phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ",
            "Married": true
        },
        {
            "Name": "Phạm Thu Hà",
            "Age": 31,
            "Country": 1,
            "Address": "78 khu phố 6, phường Linh Trung, Thủ Đức, TP.HCM",
            "Married": false
        },
        {
            "Name": "Vũ Minh Đức",
            "Age": 55,
            "Country": 1,
            "Address": "Số 8, ngách 32, ngõ 12, phố Huế, Hai Bà Trưng, Hà Nội",
            "Married": true
        },
        {
            "Name": "Đặng Thị Mai",
            "Age": 24,
            "Country": 1,
            "Address": "12/34 đường Nguyễn Văn Linh, Đà Nẵng",
            "Married": false
        },
        {
            "Name": "Hoàng Văn Nam",
            "Age": 38,
            "Country": 1,
            "Address": "45 đường Hùng Vương, thành phố Huế",
            "Married": true
        },
        {
            "Name": "Nguyễn Thị Hồng",
            "Age": 29,
            "Country": 1,
            "Address": "Khu đô thị Mỹ Đình, Nam Từ Liêm, Hà Nội",
            "Married": false
        },
        {
            "Name": "Trần Văn Tài",
            "Age": 47,
            "Country": 1,
            "Address": "78/9 đường Lý Thường Kiệt, phường 6, Quận Tân Bình, TP.HCM",
            "Married": true
        },
        {
            "Name": "Lý Thị Hương",
            "Age": 33,
            "Country": 1,
            "Address": "123 khu phố 1, phường An Phú, Thành phố Thủ Đức, TP.HCM",
            "Married": true
        },
        {
            "Name": "John Smith",
            "Age": 45,
            "Country": 3,
            "Address": "123 Main Street, New York",
            "Married": true
        },
        {
            "Name": "Pierre Dupont",
            "Age": 39,
            "Country": 4,
            "Address": "45 Rue de Rivoli, Paris",
            "Married": false
        },
        {
            "Name": "Nguyễn Thành Long",
            "Age": 50,
            "Country": 1,
            "Address": "56 đường Lạc Long Quân, phường 10, Quận Tân Bình, TP.HCM",
            "Married": true
        },
        {
            "Name": "Phan Thị Thanh",
            "Age": 27,
            "Country": 1,
            "Address": "34/12 đường Nguyễn Chí Thanh, Đà Lạt",
            "Married": false
        },
        {
            "Name": "Hồ Văn Đạt",
            "Age": 32,
            "Country": 1,
            "Address": "Khu đô thị Vinhomes Riverside, Long Biên, Hà Nội",
            "Married": true
        },
        {
            "Name": "Trương Thị Ngọc",
            "Age": 41,
            "Country": 1,
            "Address": "12 đường 30/4, phường Xuân Phú, Huế",
            "Married": false
        },
        {
            "Name": "Đỗ Minh Khôi",
            "Age": 36,
            "Country": 1,
            "Address": "78 đường Nguyễn Thị Minh Khai, phường 1, Vũng Tàu",
            "Married": true
        },
        {
            "Name": "Kim Ji-hoon",
            "Age": 30,
            "Country": 7,
            "Address": "123 Gangnam-gu, Seoul",
            "Married": false
        },
        {
            "Name": "Nguyễn Thị Thuỷ",
            "Age": 25,
            "Country": 1,
            "Address": "45/6 đường Lê Hồng Phong, Nha Trang",
            "Married": false
        },
        {
            "Name": "Mai Văn Sơn",
            "Age": 53,
            "Country": 1,
            "Address": "12 khu phố 2, phường Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng",
            "Married": true
        },
        {
            "Name": "Stuart Wallace",
            "Age": 25,
            "Country": 7,
            "Address": "648-4990 Sed Rd.",
            "Married": true
        },
        {
            "Name": "Carter Clarke",
            "Age": 59,
            "Country": 6,
            "Address": "Ap #547-2921 A Street",
            "Married": false
        }
    ];

    db.users = [
        {
            "ID": "x",
            "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
            "Name": "Carson Kelley",
            "RegisterDate": "2002-04-20T22:55:52-07:00"
        },
        {
            "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
            "Name": "Prescott Griffin",
            "RegisterDate": "2011-02-22T05:59:55-08:00"
        },
        {
            "Account": "06FAAD9A-5114-08F6-D60C-961B2528B4F0",
            "Name": "Amir Saunders",
            "RegisterDate": "2014-08-13T09:17:49-07:00"
        },
        {
            "Account": "EED7653D-7DD9-A722-64A8-36A55ECDBE77",
            "Name": "Derek Thornton",
            "RegisterDate": "2012-02-27T01:31:07-08:00"
        },
        {
            "Account": "2A2E6D40-FEBD-C643-A751-9AB4CAF1E2F6",
            "Name": "Fletcher Romero",
            "RegisterDate": "2010-06-25T15:49:54-07:00"
        },
        {
            "Account": "3978F8FA-DFF0-DA0E-0A5D-EB9D281A3286",
            "Name": "Thaddeus Stein",
            "RegisterDate": "2013-11-10T07:29:41-08:00"
        },
        {
            "Account": "658DBF5A-176E-569A-9273-74FB5F69FA42",
            "Name": "Nash Knapp",
            "RegisterDate": "2005-06-24T09:11:19-07:00"
        },
        {
            "Account": "76D2EE4B-7A73-1212-F6F2-957EF8C1F907",
            "Name": "Quamar Vega",
            "RegisterDate": "2011-04-13T20:06:29-07:00"
        },
        {
            "Account": "00E46809-A595-CE82-C5B4-D1CAEB7E3E58",
            "Name": "Philip Galloway",
            "RegisterDate": "2008-08-21T18:59:38-07:00"
        },
        {
            "Account": "C196781C-DDCC-AF83-DDC2-CA3E851A47A0",
            "Name": "Mason French",
            "RegisterDate": "2000-11-15T00:38:37-08:00"
        },
        {
            "Account": "5911F201-818A-B393-5888-13157CE0D63F",
            "Name": "Ross Cortez",
            "RegisterDate": "2010-05-27T17:35:32-07:00"
        },
        {
            "Account": "B8BB78F9-E1A1-A956-086F-E12B6FE168B6",
            "Name": "Logan King",
            "RegisterDate": "2003-07-08T16:58:06-07:00"
        },
        {
            "Account": "06F636C3-9599-1A2D-5FD5-86B24ADDE626",
            "Name": "Cedric Leblanc",
            "RegisterDate": "2011-06-30T14:30:10-07:00"
        },
        {
            "Account": "FE880CDD-F6E7-75CB-743C-64C6DE192412",
            "Name": "Simon Sullivan",
            "RegisterDate": "2013-06-11T16:35:07-07:00"
        },
        {
            "Account": "BBEDD673-E2C1-4872-A5D3-C4EBD4BE0A12",
            "Name": "Jamal West",
            "RegisterDate": "2001-03-16T20:18:29-08:00"
        },
        {
            "Account": "19BC22FA-C52E-0CC6-9552-10365C755FAC",
            "Name": "Hector Morales",
            "RegisterDate": "2012-11-01T01:56:34-07:00"
        },
        {
            "Account": "A8292214-2C13-5989-3419-6B83DD637D6C",
            "Name": "Herrod Hart",
            "RegisterDate": "2008-03-13T19:21:04-07:00"
        },
        {
            "Account": "0285564B-F447-0E7F-EAA1-7FB8F9C453C8",
            "Name": "Clark Maxwell",
            "RegisterDate": "2004-08-05T08:22:24-07:00"
        },
        {
            "Account": "EA78F076-4F6E-4228-268C-1F51272498AE",
            "Name": "Reuben Walter",
            "RegisterDate": "2011-01-23T01:55:59-08:00"
        },
        {
            "Account": "6A88C194-EA21-426F-4FE2-F2AE33F51793",
            "Name": "Ira Ingram",
            "RegisterDate": "2008-08-15T05:57:46-07:00"
        },
        {
            "Account": "4275E873-439C-AD26-56B3-8715E336508E",
            "Name": "Damian Morrow",
            "RegisterDate": "2015-09-13T01:50:55-07:00"
        },
        {
            "Account": "A0D733C4-9070-B8D6-4387-D44F0BA515BE",
            "Name": "Macon Farrell",
            "RegisterDate": "2011-03-14T05:41:40-07:00"
        },
        {
            "Account": "B3683DE8-C2FA-7CA0-A8A6-8FA7E954F90A",
            "Name": "Joel Galloway",
            "RegisterDate": "2003-02-03T04:19:01-08:00"
        },
        {
            "Account": "01D95A8E-91BC-2050-F5D0-4437AAFFD11F",
            "Name": "Rigel Horton",
            "RegisterDate": "2015-06-20T11:53:11-07:00"
        },
        {
            "Account": "F0D12CC0-31AC-A82E-FD73-EEEFDBD21A36",
            "Name": "Sylvester Gaines",
            "RegisterDate": "2004-03-12T09:57:13-08:00"
        },
        {
            "Account": "874FCC49-9A61-71BC-2F4E-2CE88348AD7B",
            "Name": "Abbot Mckay",
            "RegisterDate": "2008-12-26T20:42:57-08:00"
        },
        {
            "Account": "B8DA1912-20A0-FB6E-0031-5F88FD63EF90",
            "Name": "Solomon Green",
            "RegisterDate": "2013-09-04T01:44:47-07:00"
        }
     ];

}());