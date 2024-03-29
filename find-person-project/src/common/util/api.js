import axios from "axios";
import { API_HOST } from "../constant";
import { message } from "antd";

/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 */

export function callApi({ method = "get", url, params, data }) {
  return axios({
    url,
    method,
    baseURL: API_HOST,
    params,
    data,
    // 사용자 인증을 위해 쿠키로 토큰을 저장
    withCredentials: true,
  }).then((response) => {
    const { resultCode, resultMessage } = response.data;
    if (resultCode < 0) {
      message.error(resultMessage);
    }
    return {
      isSuccess: resultCode === ResultCode.Success,
      data: response.data.data,
      resultCode,
      resultMessage,
    };
  });
}

export const ResultCode = {
  Success: 0,
};
