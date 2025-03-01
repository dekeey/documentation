# Hướng dẫn & Ví dụ

Dưới đây chúng tôi sẽ liệt kê các bài hướng dẫn và ví dụ đa dạng để giúp bạn thiết lập và chạy dự án một cách nhanh chóng, dễ dàng nhất có thể.

## Ví dụ SubQuery



## Các dự án mẫu SubQuery

| Ví dụ                                                                                         | Mô tả                                                                                                                                | Chủ đề                                                                                                                                           |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [extrinsic-finalized-block](https://github.com/subquery/tutorials-extrinsic-finalised-blocks) | Lập Index về các yếu tố bên ngoài để có thể truy vấn bằng hash của chúng                                                             | Ví dụ đơn giản nhất về function **block handler** (xử lý block)                                                                                  |
| [block-timestamp](https://github.com/subquery/tutorials-block-timestamp)                      | Lập Index theo dấu thời gian cho từng block đã được hoàn thiện                                                                       | Một ví dụ đơn giản khác về function **call handler** (xử lý lệnh gọi)                                                                            |
| [validator-threshold](https://github.com/subquery/tutorials-validator-threshold)              | Lập Index về mức staking tối thiểu để người xác nhận đủ điều kiện để được bầu chọn.                                                  | Một ví dụ phức tạp hơn về function **block handler** có tác dụng tạo **lệnh gọi bên ngoài** tới cho `@polkadot/api` để lấy thêm dữ liệu on-chain |
| [sum-reward](https://github.com/subquery/tutorials-sum-reward)                                | Lập Index về số tiền ràng buộc để staking, phần thưởng staking và khoản phạt (slash) từ các sự kiện của block đã hoàn thiện          | Function **event handlers** phức tạp hơn với quan hệ **one-to-many**                                                                             |
| [entity-relation](https://github.com/subquery/tutorials-entity-relations)                     | Lập Index về việc chuyển số dư giữa các tài khoản và cũng lập chỉ mục lô tiện ích, nhằm tìm hiểu nội dung của các lệnh gọi bên ngoài | Mối quan hệ **One-to-many** và **many-to-many** cùng với function **extrinsic handling**                                                         |
| [kitty](https://github.com/subquery/tutorials-kitty-chain)                                    | Lập Index thông tin ra đời của các kitty.                                                                                            | Function phức tạp để **xử lý lệnh gọi** và **xử lý sự kiện**, với dữ liệu được lập Index từ **chuỗi tùy chỉnh**                                  |
