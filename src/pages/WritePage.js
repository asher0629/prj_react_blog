import {useState, useEffect} from 'react';

function WritePage() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState("");
    const [canSave, setCanSave] = useState(false);
    useEffect(() => {
        if (
          title === "" || title.length <= 0 || title.trim() === "" ||
          body === "" || body.length <= 0 || body.trim() === "" ||
          category === "" || category.length <= 0 || category.trim() === ""
        ) {
          setCanSave(false)
        } else {
          setCanSave(true)
        }
      }, [title, body, category])
    return(
        <div className='fixed w-full h-screen top-0 bg-white pt-16'>
          <form className='writePage border-2 border-black rounded w-2/3 p-5 mx-auto relative'>
              <div className='writeTitle'>
                <label for="writeTitle" className='font-black'>
                  글제목
                </label>
                <input type='text' id='writeTitle' className='border border-black w-full' placeholder='여기에 제목을 입력해 주세요.' required/>
              </div>
              <div className='writeCategoryWrap absolute top-2 right-5'>
                  <select name='writeCategory' className='writeCategory border py-1 px-3'>
                    <option value="daily">일상</option>
                    <option value="hobby">취미</option>
                    <option value="study">공부</option>
                    <option value="coding">코딩</option>
                    <option value="act">기타</option>
                  </select>
              </div>
          </form>
        </div>
    );
}

export default WritePage;