export const RECEIVE_PAYMENT = "RECEIVE_PAYMENT";
export const CLEAR_PAYMENT = "CLEAR_PAYMENT";

export const createPaymentInfo = (booking) => ({
  type: RECEIVE_PAYMENT,
  payload: { booking }
})

export const clearPayment = () => ({
  type: CLEAR_PAYMENT, 
})