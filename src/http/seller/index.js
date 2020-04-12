 //发送请求需要的工具
import axiosIns from "./axios";
 //发送请求需要的配置
import config from "./config"; 
import httpUtil from "@/util/http.js";

export default httpUtil(axiosIns,config)