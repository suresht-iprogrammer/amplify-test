import types from "../types";
import axios from "axios";
import { serverApiPath, domainApiPath } from "../../config/config";

export const getProductList = () => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/products?populate=*`);
  dispatch({ type: types.SET_PRODUCT_LIST, value: response.data });
};

export const getFruitDetailData = (code) => async (dispatch) => {
  // DFV2021-105001
//   let code = "DFV2021-105001";
  //   let code = '202210048350';

  const responseTraceData = await axios.get(
    `${domainApiPath}/farmtrace/gettracedata/${code}`
  );
  
  dispatch({ type: types.SET_TRACE_DATA, value: responseTraceData.data });
  const responseProduceData = await axios.get(
    `${domainApiPath}/farmtrace/getproducedata/${responseTraceData && responseTraceData.data && responseTraceData.data.product && responseTraceData.data.product.productid}/en`
  );

  const getOwnerDetails = await axios.get(
    `${domainApiPath}/location/${responseTraceData && responseTraceData.data && responseTraceData.data.transactionprocess && responseTraceData.data.transactionprocess[0].harvest.operationlocationid}`,
    {
      headers: {
        Authorization:
          "Basic " +
          btoa("contactus.mumbai@lateralpraxis.com" + ":" + "FHdp=9/.{@T"),
      },
    }
  );

  const getPackingDetails = await axios.get(
    `${domainApiPath}/location/${responseTraceData && responseTraceData.data && responseTraceData.data.transactionprocess && responseTraceData.data.transactionprocess[0].packing.operationlocationid}`,
    {
      headers: {
        Authorization:
          "Basic " +
          btoa("contactus.mumbai@lateralpraxis.com" + ":" + "FHdp=9/.{@T"),
      },
    }
  );

  const getStuffingDetails = await axios.get(
    `${domainApiPath}/location/${responseTraceData && responseTraceData.data && responseTraceData.data.transactionprocess && responseTraceData.data.transactionprocess[0].stuffing.operationlocationid}`,
    {
      headers: {
        Authorization:
          "Basic " +
          btoa("contactus.mumbai@lateralpraxis.com" + ":" + "FHdp=9/.{@T"),
      },
    }
  );

  dispatch({
    type: types.SET_OWNER_DETAIL_DATA,
    value: [getOwnerDetails, getPackingDetails, getStuffingDetails],
  });

  // for reference dummy object
  var obj1 = {
    id: "61",
    language: "en",
    cropname: "Banana",
    cropvariety: "Grand Nain",
    nutrition: [
      {
        id: 1,
        level1boldlabel: "Serving size",
        ismainnutrient: "0",
        level1normallable: "",
        data: "100 g",
        level2: [
          {
            id: 1,
            level2boldlabel: "Amount per serving",
            level2normallable: "",
            data: "",
            level3: [],
          },
        ],
      },
      {
        id: 2,
        level1boldlabel: "Calories",
        ismainnutrient: "1",
        level1normallable: "",
        data: "89",
        level2: [
          {
            id: 2,
            level2boldlabel: "",
            level2normallable: "",
            data: "% Daily value *",
            level3: [],
          },
          {
            id: 3,
            level2boldlabel: "Total fat",
            level2normallable: "0.3g",
            data: "0 %",
            level3: [
              {
                id: 1,
                label: "Saturated fat 0.1g",
                data: "0 %",
              },
            ],
          },
          {
            id: 4,
            level2boldlabel: "Sodium",
            level2normallable: "1mg",
            data: "0 %",
            level3: [],
          },
          {
            id: 5,
            level2boldlabel: "Total carbohydrate",
            level2normallable: "23g",
            data: "8 %",
            level3: [
              {
                id: 2,
                label: "Dietary fiber 2.6g",
                data: "9 %",
              },
              {
                id: 3,
                label: "Sugar 12g",
                data: "",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        level1boldlabel: "Protein",
        ismainnutrient: "0",
        level1normallable: "1.1g",
        data: "2 %",
        level2: [
          {
            id: 6,
            level2boldlabel: "",
            level2normallable: "Vitamin D 0.00mcg",
            data: "0 %",
            level3: [],
          },
          {
            id: 7,
            level2boldlabel: "",
            level2normallable: "Calcium 5.00mg",
            data: "0 %",
            level3: [],
          },
          {
            id: 8,
            level2boldlabel: "",
            level2normallable: "Iron 0.26mg",
            data: "1 %",
            level3: [],
          },
          {
            id: 9,
            level2boldlabel: "",
            level2normallable: "Potassium 358mg",
            data: "8 %",
            level3: [],
          },
        ],
      },
    ],
    note: "The % Daily Value (DV) tells you how much a nutrient in a serving of food contribute to a daily diet. 2,000 calories a day is used for general nutrition advice.",
  };

  dispatch({ type: types.SET_NUTRIENT_DATA, value: responseProduceData.data });
  //   dispatch({ type: types.SET_NUTRIENT_DATA, value: obj1 });

  const response = await axios.get(
    `${serverApiPath}/products?filters[product_id][$eq]=${responseTraceData && responseTraceData.data && responseTraceData.data.product && responseTraceData.data.product.productid}&populate[customer_reviews][populate]=*&populate[product_logo][populate]=*&populate[product_image][populate]=*&populate[slider_images][populate]=*&populate[banner_background][populate]=*&populate[slider_background][populate]=*&populate[fruit_states][populate]=*&populate[my_stories][populate]=*&populate[blogs][populate]=*&populate[recipies][populate]=*&populate[health_benefits][populate]=*&populate[other_uses][populate]=*&sort[0]=publishedAt%3Adesc`
  );

  dispatch({ type: types.SET_FRUIT_DETAIL_DATA, value: response.data.data[0] });
};
