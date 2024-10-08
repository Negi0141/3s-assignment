// pages/index.js
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

// スタイル定義
const Wrapper = styled.section`
    box-sizing: border-box;
    padding: 4em;
    background-color: #fff;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 8px;

    @media (max-width: 768px) {
        padding: 100px 0px;
    }
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    color: black;
    margin-bottom: 1.5em;
`;

const Content = styled.div`
    flex: 1;
    padding: 0 10px;
`;

const SubTitle = styled.div`
    font-size: 16px;
    color: black;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0px 0px 4px 0px #32323229 inset;
    border-radius: 4px;
    background-color: #f7f7f7;
    padding: 10px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const Option = styled.select`
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0px 0px 4px 0px #32323229 inset;
    border-radius: 4px;
    background-color: #f7f7f7;
    padding: 10px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const Contain = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const Button = styled.button`
    border: 1px solid #eaeaea;
    border-radius: 20px;
    padding: 4px 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

// メインコンポーネント
export default function Home() {
    const [zipcode, setZipcode] = useState("");
    const [pref, setPref] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [msg, setMsg] = useState(null); 

    // 住所を取得する関数
    const getAddress = async () => {
        try {
            const res = await axios.get(
                "https://zipcloud.ibsnet.co.jp/api/search",
                {
                    params: { zipcode: zipcode },
                }
            );
            console.log(res);
            if (res.data.status === 200) {
                setPref(res.data.results[0].address1);
                setCity(res.data.results[0].address2); 
                setStreet(res.data.results[0].address3); 
                setMsg(null);
            } else {
                setPref("");
                setCity(""); 
                setStreet(""); 
                setMsg(res.data.message); 
            }
        } catch (error) {
            setMsg("エラーが発生しました");
            console.error(error);
        }
    };

    return (
        <Wrapper>
            <Title>郵便番号検索</Title>
            <Contain>
                <Content>
                    <Contain>
                        <SubTitle>郵便番号</SubTitle>
                        <Button onClick={getAddress}>住所を取得する</Button>
                    </Contain>
                    <Input
                        placeholder="000-0000"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                    />
                    {msg ? <p>{msg}</p> : null}
                </Content>
            </Contain>
            <Contain>
                <Content>
                    <SubTitle>都道府県</SubTitle>
                    <Option
                        placeholder="未選択"
                        value={pref}
                        onChange={(e) => setPref(e.target.value)}
                    >
                        <option value="">未選択</option>
                        <option value="北海道">北海道</option>
                        <option value="青森県">青森県</option>
                        <option value="岩手県">岩手県</option>
                        <option value="宮城県">宮城県</option>
                        <option value="秋田県">秋田県</option>
                        <option value="山形県">山形県</option>
                        <option value="福島県">福島県</option>
                        <option value="茨城県">茨城県</option>
                        <option value="栃木県">栃木県</option>
                        <option value="群馬県">群馬県</option>
                        <option value="埼玉県">埼玉県</option>
                        <option value="千葉県">千葉県</option>
                        <option value="東京都">東京都</option>
                        <option value="神奈川県">神奈川県</option>
                        <option value="新潟県">新潟県</option>
                        <option value="富山県">富山県</option>
                        <option value="石川県">石川県</option>
                        <option value="福井県">福井県</option>
                        <option value="山梨県">山梨県</option>
                        <option value="長野県">長野県</option>
                        <option value="岐阜県">岐阜県</option>
                        <option value="静岡県">静岡県</option>
                        <option value="愛知県">愛知県</option>
                        <option value="三重県">三重県</option>
                        <option value="滋賀県">滋賀県</option>
                        <option value="京都府">京都府</option>
                        <option value="大阪府">大阪府</option>
                        <option value="兵庫県">兵庫県</option>
                        <option value="奈良県">奈良県</option>
                        <option value="和歌山県">和歌山県</option>
                        <option value="鳥取県">鳥取県</option>
                        <option value="島根県">島根県</option>
                        <option value="岡山県">岡山県</option>
                        <option value="広島県">広島県</option>
                        <option value="山口県">山口県</option>
                        <option value="徳島県">徳島県</option>
                        <option value="香川県">香川県</option>
                        <option value="愛媛県">愛媛県</option>
                        <option value="高知県">高知県</option>
                        <option value="福岡県">福岡県</option>
                        <option value="佐賀県">佐賀県</option>
                        <option value="長崎県">長崎県</option>
                        <option value="熊本県">熊本県</option>
                        <option value="大分県">大分県</option>
                        <option value="宮崎県">宮崎県</option>
                        <option value="鹿児島県">鹿児島県</option>
                        <option value="沖縄県">沖縄県</option>
                    </Option>
                </Content>
                <Content>
                    <SubTitle>市区町村</SubTitle>
                    <Input
                        placeholder="世田谷区"
                        value={city} 
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Content>
            </Contain>
            <Contain>
                <Content>
                    <SubTitle>丁目・番地・号</SubTitle>
                    <Input
                        placeholder="太子堂2丁目"
                        value={street} 
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </Content>
                <Content>
                    <SubTitle>建物名/号室</SubTitle>
                    <Input placeholder="アウケア202" />
                </Content>
            </Contain>
        </Wrapper>
    );
}
