const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const swiperSlide = $(".swiper-slide");
const swiperSlideImg = $(".swiper-slide-img")
const swiperSliceProduct = $(".swiper-wrapper-product")
const swiperSliceProductNN = $(".product-nn")
const blogItemRender = $(".swiper-wrapper-new");

const app = {
  vegetableList: [
    {
      name: "Ớt chuông",
      img: "https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-1.png?v=1646028861353",
      count: 6,
      href: "otchuong"
    },

    {
      name: "Mướp",
      img: "https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-2.png?v=1646028875540",
      count: 4,
      href: "muop"
    },

    {
      name: "Đu đủ",
      img: "https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-3.png?v=1646028896397",
      count: 5,
      href: "dudu"
    },

    {
      name: "Bông cải xanh",
      img: "https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-4.png?v=1646028920367",
      count: 2,
      href: "bongcaixanh"
    },

    {
      name: "Cà chua",
      img: "https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-5.png?v=1646028939450",
      count: 3,
      href: "cachua"
    },

    {
      name: "Măng tây",
      img: "https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-6.png?v=1646028956613",
      count: 1,
      href: "mangtay"
    },
  ],
  imgIntroList: [
    {name: 'Image1', img : "https://bizweb.dktcdn.net/100/448/970/themes/880534/assets/img_intro_1.jpg?1665456005862"},
    {name: 'Image2', img : "https://bizweb.dktcdn.net/100/448/970/themes/880534/assets/img_intro_2.jpg?1665456005862"},
    {name: 'Image3', img : "https://bizweb.dktcdn.net/100/448/970/themes/880534/assets/img_intro_3.jpg?1665456005862"},
  ],
  productItems: [
    {
      name: "Chuối Nam Mỹ",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/9288721928594580500.jpg?v=1646034554000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Táo Mỹ",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/8.jpg?v=1646034552000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Cà chua bi",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/23.jpg?v=1646034551000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Bơ Trung Đông",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/9288725096572122500.jpg?v=1646034550000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Kiwi",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/30d77e3c804f764c9d87a18cb32f59.png?v=1646034549000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Nho Tím",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/2d4f7a5a67f9c49e99b8f682c25257.jpg?v=1646034548000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Cà chua Nam Mỹ",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/9.jpg?v=1646034547000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Cà chua hữu cơ",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/9288723710256318500.jpg?v=1646034546000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    }
  ],
  productItemsNN: [
    {
      name: "Dụng cụ làm cỏ kẻ gạch",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/9288721928594580500.jpg?v=1646034554000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Kéo cắt cành cây",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/8.jpg?v=1646034552000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Bình xịt tưới cây 2 lít",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/6-jpeg.jpg?v=1646033795000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Găng tay làm vườn",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/5-jpeg.jpg?v=1646033661000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Kiwi",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/30d77e3c804f764c9d87a18cb32f59.png?v=1646034549000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Nho Tím",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/2d4f7a5a67f9c49e99b8f682c25257.jpg?v=1646034548000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Cà chua Nam Mỹ",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/9.jpg?v=1646034547000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    },

    {
      name: "Cà chua hữu cơ",
      img: "https://bizweb.dktcdn.net/thumb/large/100/448/970/products/9288723710256318500.jpg?v=1646034546000",
      discount: 20,
      coin_discount: "120.000",
      coin: "150.000"
    }
  ],
  blogs: [
    {
      img: "https://bizweb.dktcdn.net/thumb/grande/100/448/970/articles/untitled-6.jpg?v=1646027190997",
      title: "Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao",
      author: " Caffe team",
      date: "31/12/2022",
      description: "Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn kéo dài liên tiếp nên nguồn cung rau xanh cho các chợ bắt đầu khan hiếm, giá tăng mạnh, thậm chí nhiều loại giá tăng gần gấp đôi. Khả..."
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/grande/100/448/970/articles/untitled-5.jpg?v=1646027162863",
      title: "Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao",
      author: " Caffe team",
      date: "31/12/2022",
      description: "Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn kéo dài liên tiếp nên nguồn cung rau xanh cho các chợ bắt đầu khan hiếm, giá tăng mạnh, thậm chí nhiều loại giá tăng gần gấp đôi. Khả..."
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/grande/100/448/970/articles/untitled-4.jpg?v=1646027137757",
      title: "Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao",
      author: " Caffe team",
      date: "31/12/2022",
      description: "Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn kéo dài liên tiếp nên nguồn cung rau xanh cho các chợ bắt đầu khan hiếm, giá tăng mạnh, thậm chí nhiều loại giá tăng gần gấp đôi. Khả..."
    }
  ],
  renderVegetable: function () {
    const html = this.vegetableList.map((vegetableItem, index) => {
      return `
      <div class="cate-item">
        <a class="image" href="/${vegetableItem.href}" title="" style="text-decoration: none">
          <img class="image_cate_thumb lazyload loaded" width="100" height="100" src=${vegetableItem.img}/>
        </a>

        <div class="hidden">
          <span class="count_sp"> ${vegetableItem.count} </span>
          <span> Sản phẩm </span>
        </div>

        <h4 class="title_cate">
          <a href="/${vegetableItem.href}" title=${vegetableItem.name}>${vegetableItem.name}</a>
        </h4>
      </div>
      `;
    });

    swiperSlide.innerHTML = html.join("");
  },

  renderImgIntroList: function () {
   const imgIntro= this.imgIntroList.map((item, index) => {
      return (
        `<a href="">
            <img src=${item.img} alt=${item.name}>
        </a>
        `
      )
    });

    swiperSlideImg.innerHTML = imgIntro.join(" ");
  },

  renderProduct: function () {
    const productItem = this.productItems.map ((item, index) => {
      return (
        `<div class="swiper-slide-product">
        <div class="wishItem ">
        <div class="product-thumbnail">
          <img style="width: 225px; border-radius: 12px;" src=${item.img} alt="">
          <span class="smart">-${item.discount}%</span>
        </div>
        
        <div class="product-info">
          <div class="product-content">
            <h3 class="product-name">
              <a class="prt-name" style="text-decoration: none; font-size: 16px;" href="">${item.name}</a>
            </h3>

            <div class="blockprice">
              ${item.coin_discount}₫ <span class="compare-price">${item.coin}₫</span>
            </div>
          </div>
        </div>
      </div>
      </div>`
      )
    });

   swiperSliceProduct.innerHTML = productItem.join("")
  },

  renderProductNN: function () {
    const productItemnn = this.productItemsNN.map ((item, index) => {
      return (
        `<div class="swiper-slide-product">
        <div class="wishItem ">
        <div class="product-thumbnail">
          <img style="width: 225px; border-radius: 12px;" src=${item.img} alt="">
          <span class="smart">-${item.discount}%</span>
        </div>
        
        <div class="product-info">
          <div class="product-content">
            <h3 class="product-name">
              <a class="prt-name" style="text-decoration: none; font-size: 16px;" href="">${item.name}</a>
            </h3>

            <div class="blockprice">
              ${item.coin_discount}₫ <span class="compare-price">${item.coin}₫</span>
            </div>
          </div>
        </div>
      </div>
      </div>`
      )
    });

    swiperSliceProductNN.innerHTML = productItemnn.join("")
  },

  renderBlog: function () {
    const blogItem = this.blogs.map((item) => {
      return (
        `<div class="swiper-slide-new">
        <div class="item_blog_base">
          <img class="item_blog_image" width="293" src=${item.img} alt="">
        </div>
        <div class="content_blog">
          <h3>
            <a class="content_blog_title" href="">${item.title}</a>
          </h3>
          <div class="time-post">
            <span class="auhor">
              <i class="fas fa-user"></i>${item.author}
            </span>
            <span class="xo"> | </span>
            <span class="icon-posted">
              <i class="fa-solid fa-clock"></i>
              Ngày ${item.date}
            </span>
          </div>
          <p>
            ${item.description}
         </p>
        </div>
      </div>
        `
      )
    });

    blogItemRender.innerHTML = blogItem.join("");
  },

  start: function () {
    this.renderVegetable();
    this.renderImgIntroList();
    this.renderProduct();
    this.renderProductNN();
    this.renderBlog();
  },
};

app.start();
