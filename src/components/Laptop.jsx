import React from "react";
import { useStore } from "../HelperComponents/StoreProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Laptop() {
  const store = useStore();
  const navigate = useNavigate();
  const products = [
    {
      id: 6,
      brand: "Apple",
      title: "MacBook Pro M3 Pro",
      description: "The connected power of Apple MacBook Pro",
      url: "data:image/jpeg;base64,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",
      Price: 199990,
    },

    {
      id: 7,
      brand: "Apple",
      title: "MacBook 15 ",
      description: "Stylish & Quality Laptop with processor and life long  ",
      url: "data:image/jpeg;base64,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",
      Price: 250999,
    },
    // {
    //     id: 2,
    //     brand: "Vivo",
    //     title: "Vivo y81 Mobile",
    //     description: "The connected power of vivo  Mobile",
    //     url: "data:image/jpeg;base64,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",
    //     Price: 15000
    // },
    // {
    //     id: 3,
    //     brand: "Apple",
    //     title: "iphone 15 pro",
    //     url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcDAgj/xABPEAABAwMABAYLCwoEBwAAAAABAAIDBAURBhIhMQcTQVFhcRQiMjdTc5KhsbLCFRdDVWJygYKRweEjJjZCVFaTlNHiFlLw8SQlM0VkdKL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIEAwUG/8QAIREBAQACAgMAAgMAAAAAAAAAAAECEQMSBCExQVEUImH/2gAMAwEAAhEDEQA/ANxQhCBlcrnS2ylNTWShkY2DlLjzAcpVXl0/j1iKa3SPHIXyBpP0AFV3hAuZlvczJXkQUbMY5tmXHrOQFlFx00rDO6OmGGA7Gh5a0fZv6yramvaW7DTyU/8AaDnx39qX/Hc3xQf4v9qxaz6QuuTHMc6WKdgy5vGuII5wrNo3Tuu1zZTSVU7G41jqyHJ6tqt1ifTRBp3JnHuYM+P/ALUv+OZfisfx/wC1Z/eJpbDdjTOnkqKYYJbKcuaD08h5VJTSNZCZNbtcZ1ujnU9YaiduXCnT2x8cdVb/AMtIcRxRyl73noaGrkOFG4OAMehF7cDuPFkA/aEx4LLVE61HSOqjD7hcXuc2RwyYogcNY3mGz/WFdXyc6vjw9pt34/H7Tase+fc/3Hvfk/gk98+5/uNe/I/BS14kqn2urZbntZWOheIHOOwPwdXzrDJLPwhue4uN31iduKv+5Rnw9Tk8fp+LWu++fcv3Gvfk/gl99C5fuNevJ/BZAyz8IWdvuxjO3FXj2lsehRusGjdHFfpS+vAOuXO1nAZ7UE8pxhMOLtdI4+Dvdasc/fPuQ2v0HvYbzhmfuUxo3wj2W+V3uc9tRb7hyU1ZGWOPVlPo5Mqu8INhgvWj1RM1mLhQxuqKSdux7HsBOM8xxu6ipy4dLZ+N1nporTlelXtAru++aJWy4zf9aWEcZ84bCrCs7KEIQgEIQgwzhCcTdL23O9xHnasjPHUdVI5kevrZBBbnpWtcIJ/5zex8v2mLOqqqo43hszsnqzhdPwk2sTZG1j6l7dUuBGMY3qxS3aktxZxxqJKgjWbHTuDCwchc47uoKMppYHx69M8OA39CjLk8xXCWaRmuyTa0ndux5lPyHxaIbhS3QTupjUMqmNL3w1Tg5z28pa4b8coxuVq19aw55ex/ZWc6Pu4y8Mqo2FlPTscZD1sIDetxO5X+A5sGAc/kD6pTfpMXLg6k1dArL/6/tFSlRVBudqrGhNWItBbO3/xz6xXOuueM7V6vjcHbGV7Xj4TpLU1PcAP1kzfch/mVXqbptPbBR8l0+UFvnBI0dsYvDbmM90nUNxB/WWesum3uk9p7ru7ZTeCUmWNaNT1YdjanFdKHWqr2/AP9Uql0NzBI2qdNaJLZVAH4B/qlYufgsjlzYSw/4Ge97bc8zleFRuBnve23qKvK8J4AQhCAQhCDBeEU4vV5xyvPsn7llMT4WzTdkhxccapHJtH3ZWwaZxibSS6sdyzn0BUGv0dlMhLGNe3OzIyumk2IagLPdCc04IgIIGfMpB7wxp1sEE9yRkFOaOyTM7o6nMAwlOX2V8jdVz8jxbkRozinMkYa09oD3IGBnqCuVKS2yuyBshc3H1SFD22yCJzd5xty4YA6enzKemY1lDJG3uWxPx5JVvwtHHR6u4rRC1szuh9oqKr7ltO3l51E0Fw1NHaNmt3LCPOVD1ddrE7V9Lw3HDgxv+Rv/k9cJIlKi4kk7UzfXnO9Q0tUSd64Gc86y8nmSX0z5eTlU+2uOd6dwXAg90qqJzzrrHUkFRh5stMfJsX2huR1h2ys9JcdagqAXfAv9CyulrcEbVYqO6alDUnO6B/oW7tjycdacfK3PbauBnvfW3qKvKo/Az3vbb1O9KvC+ReaEIQgEIQgwzSV2NJLnk5/4l3pTBpTrSh35y3PH7S/0qODl0XOWkLoCE1D10DlMDkFealx7Hlx4N/qlcw8DeUSOzFL4p/qlSMtpqpwoRDnuScfSm0shK5RO1XDJ2Hella5pwesdIWr+VbwzH9KPBKRBSLFcthUoKRCTLQ7xyEFPTVllHK3Pdt1VHRgucABknkXqU7dXOQPSt2HlXDis/fpD6g4FP0DpPney1X1ULgT/QOl+f7LVfV5yQhCEAhCEGD6aYbpbdQN3H/cFEBylNNzjS+6+O+4KFDl0nxY5Dlzq61lJGHPBcScBo5V5DlHXwEtik5BkHoUlep7pDNJFI9kh4s54vI1SeQkqWZUdkUZlDXN1o37HDb3JVQLhjerLQVHZFBrapGrG5p5iQ0oMxTylqIS3iatrjEdz2d1GejnHQma9wxySyNjiY573HAa0ZJXOXSqQms9SYzPRgVlON8lP22r85u9v0hR2FMU0VPa5BLVXCZlQPg6B3bt+c/cOoZUg/TE6rGm00FZqjHG3NgqZT9btUFWwn9LaKyeMTuj4im5aic8XH9p3noGSpmPTIsfkWOzwnwlJTcVI3qdk4+xMquSku7g73Rq2VAGxtxl4xp6BIN30gDpQMqiWnpwYaImQkYfO5uM9DRyDr29SY52rrVU81NKYqhhY8ch5Rzg8o6QuKW7H1VwMADg/txAGTnPSryqNwMd762/WV5UAQhCAQhCDAdOz+eN18d9wUGHKY09ONMrt472QoEOXWfFzkOSSNbLG6OQZa7eFyDl6DkQ5+5tJq6uo7r1jlPGNayIxsGGhjgB9BXEOXsO7r5jvVKDNGtLiA0ZJTrsjsaN0VMcOcMSSje7oB5B6V5poSYnyj5oXB4IO1V6etqb9vJOUiEKiQlSIQO4arWi7HqMvh/V54zzj+ibysLHkEg8xHKOdI0ZTmSEml18dz6F0mG5tFun0/wMd762/WV5VG4GO97bfrelXlc0hCEIBCEIPnnhAONM7t472QoFrlN8IP6aXbx3shV/K6z4s763SlDlxBXoOQdw5dGHJI+S71SmwcukTu3+q71SlEBRUJNlheB3esfOoyppHAnYr9Y7bxui9A/GdaInzlRtZaiCe1WiydIx45/2qjugcOReOLdzKzzWw5Papsbb0LhcWiVA6h5l7bC48imxbs8nmXeK2/JSYlqGp6VxcNimoqAut1T2ucROI6wFI0lqJcO1VhprVq0M51fgnehaMMfVZ+TL40/gY73tt+sryqNwMd762/SrysLUEIQgEIQg+deEM/nrdvHD1Qq8Cp/hF/Ta7eOHqhV0FdIs6ZSgrmHJdZB0yutO7Mo+a71Sm+V1pz+WHzXeqVI0HQm3ibQq1Pxvg9or1W2bP6qnuDenD9AbIcb6f2nKbmoQ7kXTHk9aY7hrK1l1RZtp7VM32f5I+xafLageQJq6zg/qhNr+2ctsx/yj7E6gsvyVfG2cA7gnEVqA5B9ibLVSo7NtHaqXktgjt1SdXdA/k+SVY4beG42D7F7r6YNtlZs+Af6pU99RS4bphwMd722/W9KvKo3Ax3vbb9ZXlZWoIQhAIQhB87cJUJi02ueRjXe146i0Ksra+E3Qma/FlztLWmuibqPiJxxrBux0jJWO1NurqWZ0NRRzxyt3tMZyFeVbZsjK6dj1H7PN/Dd/RHY8/wCzzfw3f0UjwCu1L21RGwnunav27B6V47HqP2eb+G7+iXsepG0U84I2g8U7Z5kG18FcrJuD+z6pB1InMd0EPcCFaiwFYfolpTc9F5ZWw0T6q3VEnGTUbjxb4pDvdEXbCDjuf91chwsWrZxlnvbTzClB84cq/HOxezEDyLzxLeZUj31rT8UXz+T/ABSe+rafii+fyf4qdo0vAhbzL0IhzKi++rafii+fyf4pffWtHxRfP5P8U2nqvgYEyv8APHSWG5VEx1Y4qSV7jzAMJVPPCvacZFnvjjzdiAZ/+k0rp9IuEdjLdRW2az2B7mmqqagjjZ2jbqADcN3+2Qo2SLPwOQui4PbVrNI12l4zzEq7JrbaOG30MFHSs1YYIxGwcwAwnSqsEIQgEIQgTAXgwxHfGw9bQhCBOx4PAx+QEdjQeBj8gIQgOxoPAx+QEnY1P4CLyAhCBDS05+Ai8gJexafwEXkBKhAnYtP4CLyAl7Gp/AReQEIQJ2NB4CPyAl7Hg8DH5AQhAcRCN0Ufkhemsa3Y1oHUEIQesYSoQgEIQg//2Q==",
    //     description: "The connected power Apple iphone 15 pro",
    //     Price: 40000
    // },
    // {
    //     id: 4,
    //     brand: "oppo",
    //     title: "oppo A8",
    //     url: "data:image/jpeg;base64,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",
    //     description: "The connected power of oppo moboiles A8",
    //     Price: 12000
    // },
    // {
    //     id: 5,
    //     brand: "One plus",
    //     title: "A19 plus",
    //     url: "data:image/jpeg;base64,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",
    //     description: "The connected power of one plus Mobiles A8",
    //     Price: 25000
    // },
  ];

  const AddToCart = (data) => {
    store.addProduct(data);
    toast.success("Product Added to Cart Successfully");
  };

  const removeFromCart = (id) => {
    store.removeProduct(id);
    toast.success("Product Removed Successfully");
  };

  const buyNow = (data) => {
    store.addProduct(data);
    navigate("/checkout");
  };
  return (
    <div>
      <div className="my-4 mx-5">
        <div className="container my-4">
          <h2
            className="my-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Branded Laptops{" "}
          </h2>
          <div className="row">
            {products.map((item) => {
              return (
                <div
                  className="col-md-3 m-1 products"
                  key={item.id}
                  style={{ width: "320px" }}
                >
                  <div className="card " style={{ border: "0px solid" }}>
                    <div className="card-body">
                      <h3 className="card-title">{item.brand}</h3>
                      <h5 className="card-title">{item.title}</h5>
                      <img src={item?.url} />

                      <p className="card-text">{item.description}</p>
                      <h2>Rs.{item.Price}</h2>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={() => buyNow(item)}
                      >
                        Buy Now
                      </button>
                      {store.cartData.some((e) => e.id == item.id) ? (
                        <button
                          className="btn btn-primary mx-1"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary mx-1 "
                          onClick={() => AddToCart(item)}
                        >
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
